"use client";

import { motion } from 'framer-motion';

// ৫টি সফটওয়্যার ও স্কিলের হাই-কোয়ালিটি SVG লোগো ডাটা
const techLogos = [
  {
    name: "Photoshop",
    // Ps Blue Icon
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-[0_0_10px_#00C8FF]" fill="#001E36">
        <rect width="24" height="24" rx="4" fill="#001E36" stroke="#00C8FF" strokeWidth="1.5"/>
        <text x="5" y="16.5" fill="#00C8FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Ps</text>
      </svg>
    ),
    delay: 0,
    radiusX: 130, // ডানে-বামে ঘোরার ব্যাসার্ধ
    radiusY: 50,  // ওপর-নিচে থ্রিডি বাঁকানোর ব্যাসার্ধ
    duration: 15
  },
  {
    name: "Premiere Pro",
    // Pr Purple Icon
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-[0_0_10px_#EA77FF]" fill="#2D003E">
        <rect width="24" height="24" rx="4" fill="#2D003E" stroke="#EA77FF" strokeWidth="1.5"/>
        <text x="5" y="16.5" fill="#EA77FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Pr</text>
      </svg>
    ),
    delay: 3,
    radiusX: 140,
    radiusY: -40,
    duration: 18
  },
  {
    name: "CapCut",
    // Capcut Stylized Vector
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-[0_0_10px_#FFFFFF]">
        <rect width="24" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
        <path d="M6 6h4v4H6z" fill="#00F5FF"/>
        <path d="M14 14h4v4h-4z" fill="#FFFFFF"/>
        <path d="M6 14h4v4H6z" fill="#FFFFFF"/>
        <path d="M14 6h4v4h-4z" fill="#00F5FF"/>
      </svg>
    ),
    delay: 6,
    radiusX: -135,
    radiusY: 45,
    duration: 16
  },
  {
    name: "GoHighLevel",
    // GHL Custom Funnel/Automation Icon
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-[0_0_10px_#2A85FF]" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" stroke="#2A85FF" strokeWidth="1.5"/>
        <path d="M7 7h10v2L13 14v4l-2 2v-6L7 9V7z" fill="#2A85FF"/>
        <circle cx="12" cy="11" r="1.5" fill="#FFFFFF" />
      </svg>
    ),
    delay: 9,
    radiusX: -145,
    radiusY: -55,
    duration: 20
  },
  {
    name: "AI",
    // AI Cyber Glow Tech Icon
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 drop-shadow-[0_0_12px_#A855F7]" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#A855F7" strokeWidth="1.5"/>
        <path d="M12 6v12M6 12h12M9 9l6 6M15 9l-6 6" stroke="#00F5FF" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#A855F7"/>
      </svg>
    ),
    delay: 12,
    radiusX: 0,
    radiusY: 130,
    duration: 14
  }
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0B0B0F] text-left overflow-hidden border-b border-white/5 py-16 lg:py-24 px-6">
      
      {/* 🔮 ব্যাকগ্রাউন্ডে ক্রিয়েティブ অ্যানিমেটেড মোশন গ্রাফিক্স */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px]" />

        <svg className="absolute inset-0 w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            cx="20%" cy="30%" r="150" 
            stroke="url(#heroPurpleGradient)" strokeWidth="1" strokeDasharray="6 6" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20% 30%" }}
          />
          <defs>
            <linearGradient id="heroPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* 📸 বাম পাশ: ইমেজ এবং ৩ডি অরবিটিং লোগো কন্টেইনার */}
        <div className="lg:col-span-5 w-full max-w-[360px] lg:max-w-none mx-auto relative flex items-center justify-center min-h-[400px]">
          
          {/* ইমেজের ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
          <div className="absolute w-[280px] h-[280px] bg-gradient-to-r from-brand-purple/20 to-brand-neon/20 rounded-full blur-3xl animate-pulse" />

          {/* মেইন ইমেজ কন্টেইনার ফ্রেম */}
          <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full border border-white/10 overflow-hidden shadow-2xl bg-[#12121A] z-10 group">
            <img 
              src="/ankur-profile.png" // 👈 আপনার নতুন ইমেজ ফাইলটির নাম public ফোল্ডারে 'ankur-profile.png' দিয়ে রাখুন
              alt="Ankur Biswas"
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* 🌟 ৩ডি ৩ডি ফ্লোটিং এবং অরবিটিং লোগো মেকার */}
          {techLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="absolute z-20 pointer-events-auto cursor-pointer"
              animate={{
                x: [0, logo.radiusX, 0, -logo.radiusX, 0],
                y: [logo.radiusY, 0, -logo.radiusY, 0, logo.radiusY],
                z: [0, 10, 0, -10, 0],
                scale: [1, 1.15, 0.9, 1.15, 1],
              }}
              transition={{
                duration: logo.duration,
                repeat: Infinity,
                ease: "linear",
                delay: logo.delay,
              }}
            >
              {/* ফ্লোটিং ফ্লেক্সিবল অ্যানিমেশন (লোগোটা যেন একটু ভাসে) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
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
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase">
            Bold Brands.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">
              Sharp Execution.
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl lg:max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Elevating visionary companies with impactful design solutions that capture attention and drive automated growth results.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-[#0B0B0F] border border-brand-purple/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-brand-purple hover:border-brand-neon transition shadow-glow uppercase tracking-wider text-sm">
              See My Work 
              <svg className="w-4 h-4 text-brand-neon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}