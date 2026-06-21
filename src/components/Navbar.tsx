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

        {/* সোশ্যাল আইকন এবং বাটন সেকশন */}
        <div className="flex items-center gap-5">
          {/* 🔵 ফেসবুক আইকন */}
          <a 
            href="https://www.facebook.com/ankur.biswas.792301" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-neon transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
          </a>

          {/* 💙 লিঙ্কডইন আইকন */}
          <a 
            href="https://www.linkedin.com/in/ankur-biswas-0945ab178/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-neon transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* 🎯 গেট এ কোট বাটন */}
          <Link href="#contact" className="bg-brand-neon text-white text-xs font-semibold px-5 py-2.5 rounded-md hover:bg-brand-purple transition shadow-glow">
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
}