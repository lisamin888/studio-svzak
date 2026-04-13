/**
 * Figma _info → works.json 자동 sync 스크립트
 * 이미지는 public/works/{slug}/ 에 직접 export 해두면 됩니다.
 * 실행: npm run sync-figma
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── .env.local 로드 ───────────────────────────────────────────
async function loadEnv() {
  try {
    const raw = await fs.readFile(path.join(ROOT, '.env.local'), 'utf-8');
    for (const line of raw.split('\n')) {
      const [key, ...rest] = line.split('=');
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
    }
  } catch {}
}

// ── Figma API 호출 ────────────────────────────────────────────
async function figmaApi(endpoint) {
  const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { 'X-Figma-Token': process.env.FIGMA_TOKEN },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API 오류 ${res.status}: ${endpoint}\n${body}`);
  }
  return res.json();
}

// ── _info 텍스트 읽기 ─────────────────────────────────────────
function readInfoField(infoFrame, fieldName) {
  if (!infoFrame?.children) return '';
  const nodes = infoFrame.children.filter(
    (n) => n.type === 'TEXT' && n.name === fieldName && n.characters !== fieldName
  );
  return nodes[0]?.characters?.trim() ?? '';
}

// ── public/works/{slug}/ 에서 이미지 파일 목록 읽기 ──────────
async function getLocalImages(slug) {
  const folder = path.join(ROOT, 'public', 'works', slug);
  try {
    const files = await fs.readdir(folder);
    return files
      .filter((f) => /^\d+\.(png|jpg|jpeg|webp)$/i.test(f))
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((f) => `/works/${slug}/${f}`);
  } catch {
    return [];
  }
}

// ── 메인 ─────────────────────────────────────────────────────
async function main() {
  await loadEnv();

  const TOKEN = process.env.FIGMA_TOKEN;
  const FILE_KEY = process.env.FIGMA_FILE_KEY;
  if (!TOKEN || !FILE_KEY) throw new Error('.env.local에 FIGMA_TOKEN, FIGMA_FILE_KEY를 확인하세요.');

  console.log('📥 Figma 파일 불러오는 중...');
  const file = await figmaApi(`/files/${FILE_KEY}`);

  const pages = file.document.children.filter((p) => !p.name.startsWith('_'));
  console.log(`📄 프로젝트 ${pages.length}개 발견\n`);

  const works = [];

  for (const page of pages) {
    const slug = page.name;
    const children = page.children ?? [];
    const infoFrame = children.find((n) => n.name === '_info');

    const title         = readInfoField(infoFrame, 'title') || slug;
    const tags          = readInfoField(infoFrame, 'tags');
    const year          = readInfoField(infoFrame, 'year');
    const duration      = readInfoField(infoFrame, 'duration');
    const description   = readInfoField(infoFrame, 'description');
    const descriptionEn = readInfoField(infoFrame, 'descriptionEn');

    // 로컬 이미지 파일 목록 읽기
    const images = await getLocalImages(slug);
    const thumbnail = `/works/${slug}/thumb.png`;

    const entry = {
      id: works.length + 1,
      slug,
      title,
      tags,
      thumbnail,
      year,
      duration,
      description,
      images,
    };
    if (descriptionEn) entry.descriptionEn = descriptionEn;

    works.push(entry);
    console.log(`✅ [${slug}] "${title}" — 이미지 ${images.length}장`);
  }

  await fs.writeFile(
    path.join(ROOT, 'data', 'works.json'),
    JSON.stringify(works, null, 2),
    'utf-8'
  );

  console.log(`\n🎉 완료! works.json 업데이트 (${works.length}개 프로젝트)`);
}

main().catch((err) => {
  console.error('❌ 오류:', err.message);
  process.exit(1);
});
