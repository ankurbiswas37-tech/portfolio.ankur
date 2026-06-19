import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B0B0F]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-8 h-8 text-brand-neon transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 14L26 6V12L16 20L6 12V6Z" fill="currentColor"/>
            <path d="M6 16L16 24L26 16V22L16 30L6 22V16Z" fill="currentColor" opacity="0.8"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-tight">
            Ankur <span className="text-brand-neon font-light">Biswas</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="text-white hover:text-brand-purple transition">Home</Link>
          <Link href="#services" className="hover:text-brand-purple transition">Services</Link>
          <Link href="#portfolio" className="hover:text-brand-purple transition">Portfolio</Link>
          <Link href="#about" className="hover:text-brand-purple transition">About</Link>
          <Link href="#contact" className="hover:text-brand-purple transition">Contact</Link>
        </div>
        <Link href="#contact" className="bg-brand-neon text-white text-xs font-semibold px-5 py-2.5 rounded-md hover:bg-brand-purple transition shadow-glow">
          GET A QUOTE
        </Link>
      </div>
    </nav>
  );
}