import sharp from "sharp";
import { readdir, unlink, readFile, writeFile } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKS_DIR = join(__dirname, "../public/works");
const JSON_PATH = join(__dirname, "../data/works.json");

async function getPngFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await getPngFiles(full)));
    else if (extname(entry.name).toLowerCase() === ".png") files.push(full);
  }
  return files;
}

async function main() {
  const pngs = await getPngFiles(WORKS_DIR);
  console.log(`Found ${pngs.length} PNG files`);

  let saved = 0;
  for (const src of pngs) {
    const dest = src.replace(/\.png$/i, ".webp");
    const before = (await sharp(src).metadata()).size ?? 0;
    await sharp(src).webp({ quality: 85 }).toFile(dest);
    const { size: after } = await sharp(dest).metadata();
    saved += (before - (after ?? 0));
    console.log(`  ${basename(src)} → ${basename(dest)}  (${Math.round((before-(after??0))/1024)}KB saved)`);
    await unlink(src);
  }

  // Update works.json
  const raw = await readFile(JSON_PATH, "utf8");
  const updated = raw.replace(/\.png/g, ".webp");
  await writeFile(JSON_PATH, updated, "utf8");

  console.log(`\nDone. Total saved: ${Math.round(saved / 1024 / 1024 * 10) / 10} MB`);
  console.log("works.json updated.");
}

main().catch(console.error);
