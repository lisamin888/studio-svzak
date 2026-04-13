export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] mt-24">
      <div className="max-w-[1280px] mx-auto px-8 py-6 flex items-center justify-between">
        <p className="font-['Roboto'] font-light text-[12px] text-[#2c2c2c] opacity-40 tracking-[0.03em]">
          ©2025 Studio SVZAK
        </p>
        <a
          href="mailto:studiosvzak@gmail.com"
          className="font-['Roboto'] font-light text-[12px] text-[#2c2c2c] opacity-40 hover:opacity-70 transition-opacity tracking-[0.03em]"
        >
          studiosvzak@gmail.com
        </a>
      </div>
    </footer>
  );
}
