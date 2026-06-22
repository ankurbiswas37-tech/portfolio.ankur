"use client";

import { motion } from 'framer-motion';

// ৫টি সফটওয়্যার ও স্কিলের হাই-কোয়ালিটি SVG লোগো ডাটা
const techLogos = [
  {
    name: "Photoshop",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#00C8FF]" fill="#001E36">
        <rect width="24" height="24" rx="4" fill="#001E36" stroke="#00C8FF" strokeWidth="1.5"/>
        <text x="5" y="16.5" fill="#00C8FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Ps</text>
      </svg>
    ),
    delay: 0,
    duration: 28
  },
  {
    name: "Premiere Pro",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#EA77FF]" fill="#2D003E">
        <rect width="24" height="24" rx="4" fill="#2D003E" stroke="#EA77FF" strokeWidth="1.5"/>
        <text x="5" y="16.5" fill="#EA77FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Pr</text>
      </svg>
    ),
    delay: 5.6,
    duration: 28
  },
  {
    name: "CapCut",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#00F5FF]" fill="none">
        <rect width="24" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
        <path d="M7 7h3v3H7z" fill="#00F5FF"/>
        <path d="M14 14h3v3h-3z" fill="#FFFFFF"/>
        <path d="M7 12.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3z" stroke="#00F5FF" strokeWidth="1.5"/>
        <path d="M9.5 7.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3z" stroke="#FFFFFF" strokeWidth="1.5"/>
      </svg>
    ),
    delay: 11.2,
    duration: 28
  },
  {
    name: "GoHighLevel",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#2A85FF]" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" stroke="#2A85FF" strokeWidth="1.5"/>
        <path d="M7 7h10v2L13 14v4l-2 2v-6L7 9V7z" fill="#2A85FF"/>
        <circle cx="12" cy="11" r="1.5" fill="#FFFFFF" />
      </svg>
    ),
    delay: 16.8,
    duration: 28
  },
  {
    name: "Illustrator",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#FF9A00]" fill="#331C00">
        <rect width="24" height="24" rx="4" fill="#331C00" stroke="#FF9A00" strokeWidth="1.5"/>
        <text x="6" y="16.5" fill="#FF9A00" fontSize="11" fontWeight="bold" fontFamily="Arial">Ai</text>
      </svg>
    ),
    delay: 22.4,
    duration: 28
  }
];

export default function Hero() {
  const xPath = [165, 133, 50, -50, -133, -165, -133, -50, 50, 133, 165];
  const yPath = [0, 96, 156, 156, 96, 0, -96, -156, -156, -96, 0];

  return (
    <section className="relative w-full bg-[#0B0B0F] text-left overflow-hidden border-b border-white/5 py-16 lg:py-24 px-6">
      
      {/* 🔮 ব্যাকগ্রাউন্ড গ্লো এবং মোশন ইফেক্ট */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* 👉 পিসি এবং বড় স্ক্রিনের জন্য ডান পাশে আপনার ব্যাকগ্রাউন্ড ইমেজ (৩০% অপাসিটি) */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-30 hidden lg:block select-none bg-no-repeat"
          style={{
            backgroundImage: "url('/ankur-profile.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)',
            maskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)',
          }}
        />

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-[#A855F7]/5 rounded-full blur-[90px]" />

        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            cx="20%" cy="30%" r="180" 
            stroke="url(#heroPurpleGradient)" strokeWidth="1" strokeDasharray="4 4" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20% 30%" }}
          />
          <motion.circle 
            cx="75%" cy="50%" r="240" 
            stroke="url(#heroNeonGradient)" strokeWidth="1" strokeDasharray="6 8" fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "75% 50%" }}
          />
          <defs>
            <linearGradient id="heroPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroNeonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* পার্টিকলস */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 3 + 'px',
              height: Math.random() * 4 + 3 + 'px',
              backgroundColor: i % 2 === 0 ? '#A855F7' : '#00F5FF',
              boxShadow: i % 2 === 0 ? '0 0 8px #A855F7' : '0 0 8px #00F5FF',
              left: i < 5 ? Math.random() * 40 + '%' : Math.random() * 40 + 55 + '%',
              top: Math.random() * 80 + 10 + '%',
              opacity: 0.5
            }}
            animate={{
              y: [0, Math.random() * -50 - 20, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* 📸 বাম পাশ: লোগো অরবিট এবং প্রোফাইল সার্কেল ফ্রেম (পিসি ভিউ অপরিবর্তিত) */}
        <div className="lg:col-span-5 w-full max-w-[360px] lg:max-w-none mx-auto relative flex items-center justify-center min-h-[380px] order-last lg:order-first">
          <div className="absolute w-[280px] h-[280px] bg-gradient-to-r from-[#A855F7]/10 to-[#00F5FF]/10 rounded-full blur-3xl" />
          <div className="absolute w-[310px] h-[310px] rounded-full border border-white/5 border-dashed pointer-events-none" />

          {/* মেইন ছবি */}
          <div className="relative w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] rounded-full border border-white/10 overflow-hidden shadow-2xl bg-[#12121A] z-10 group">
            <img 
              src="/ankur-profile.png" 
              alt="Ankur Biswas"
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* 🌟 লোগো অরবিট */}
          {techLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="absolute z-20 pointer-events-auto cursor-pointer"
              animate={{
                x: xPath,
                y: yPath,
              }}
              transition={{
                duration: logo.duration,
                repeat: Infinity,
                ease: "linear",
                delay: logo.delay,
              }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3 + (index % 2),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {logo.svg}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ✍️ ডান পাশ: টেক্সট কন্টেন্ট */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left relative z-10">
          
          {/* 🎯 মোবাইল রেসপন্সিভ কাস্টম মার্কড এরিয়া বক্স */}
          <div className="relative p-1 rounded-2xl overflow-hidden group">
            
            {/* 👉 শুধুমাত্র মোবাইলে হেডলাইন ও প্যারাগ্রাফের ব্যাকগ্রাউন্ডে ছবি শো করবে (৩০% অপাসিটি এবং স্মুথ ব্লেন্ডিং) */}
            <div 
              className="absolute inset-0 block lg:hidden opacity-30 pointer-events-none select-none bg-no-repeat z-0"
              style={{
                backgroundImage: "url('/profile 2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%',
                WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)',
                maskImage: 'radial-gradient(circle at center, black 45%, transparent 85%)',
              }}
            />

            {/* হেডলাইন */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase relative z-10">
              Bold Brands.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#00F5FF]">
                Sharp Execution.
              </span>
            </h1>

            {/* প্যারাগ্রাফ */}
            <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl lg:max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed relative z-10">
              Elevating visionary companies with impactful design solutions that capture attention and drive automated growth results.
          </p>
          </div>
          
          {/* বাটন */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-[#0B0B0F] border border-[#A855F7]/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#A855F7] hover:border-[#00F5FF] transition uppercase tracking-wider text-sm">
              See My Work 
              <svg className="w-4 h-4 text-[#00F5FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}