"use client";

import { motion } from 'framer-motion';

// ৫টি সফটওয়্যার ও স্কিলের হাই-কোয়ালিটি SVG লোগো ডাটা
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
    duration: 16
  },
  {
    name: "Premiere Pro",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#EA77FF]" fill="#2D003E">
        <rect width="24" height="24" rx="4" fill="#2D003E" stroke="#EA77FF" strokeWidth="1.5"/>
        <text x="5" y="16.5" fill="#EA77FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Pr</text>
      </svg>
    ),
    delay: 3.2,
    duration: 16
  },
  {
    name: "CapCut",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_12px_#FFFFFF]">
        <rect width="24" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="1"/>
        <path d="M6 6h4v4H6z" fill="#00F5FF"/>
        <path d="M14 14h4v4h-4z" fill="#FFFFFF"/>
        <path d="M6 14h4v4H6z" fill="#FFFFFF"/>
        <path d="M14 6h4v4h-4z" fill="#00F5FF"/>
      </svg>
    ),
    delay: 6.4,
    duration: 16
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
    delay: 9.6,
    duration: 16
  },
  {
    name: "AI",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 drop-shadow-[0_0_15px_#A855F7]" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#A855F7" strokeWidth="1.5"/>
        <path d="M12 6v12M6 12h12M9 9l6 6M15 9l-6 6" stroke="#00F5FF" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#A855F7"/>
      </svg>
    ),
    delay: 12.8,
    duration: 16
  }
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0B0B0F] text-left overflow-hidden border-b border-white/5 py-16 lg:py-24 px-6">
      
      {/* 🔮 ব্যাকগ্রাউন্ডে ক্রিয়েটিভ মোশন গ্রাফিক্স (বামে ও ডানে সম্পূর্ণ ব্যাকগ্রাউন্ড কভার করবে) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* বাম ও ডান পাশের ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[90px]" />

        {/* সম্পূর্ণ ব্যাকগ্রাউন্ড জুড়ে ডাইনামিক লাইন্স */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            cx="20%" cy="30%" r="180" 
            stroke="url(#heroPurpleGradient)" strokeWidth="1" strokeDasharray="4 4" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20% 30%" }}
          />
          {/* 👉 ডান পাশের টেক্সটের ব্যাকগ্রাউন্ড মোশন লাইন */}
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

        {/* ডান ও বাম পাশে সমানভাবে ফ্লোটিং পার্টিকলস */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-brand-purple/30 shadow-[0_0_8px_#A855F7]' : 'bg-brand-neon/30 shadow-[0_0_8px_#00F5FF]'}`}
            style={{
              width: Math.random() * 4 + 3 + 'px',
              height: Math.random() * 4 + 3 + 'px',
              left: i < 5 ? Math.random() * 40 + '%' : Math.random() * 40 + 55 + '%', // বাম এবং ডান পাশে ডিস্ট্রিবিউশন
              top: Math.random() * 80 + 10 + '%',
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
        
        {/* 📸 বাম পাশ: ইমেজ এবং নির্দিষ্ট লাইনে অরবিটিং লোগো */}
        <div className="lg:col-span-5 w-full max-w-[360px] lg:max-w-none mx-auto relative flex items-center justify-center min-h-[400px]">
          
          {/* ইমেজ ব্যাকগ্রাউন্ড গ্লো */}
          <div className="absolute w-[280px] h-[280px] bg-gradient-to-r from-brand-purple/20 to-brand-neon/20 rounded-full blur-3xl animate-pulse" />

          {/* গাইডলাইন অরবিট পাথ (ভিজ্যুয়াল সৌন্দর্যের জন্য লোগোর ঘূর্ণন পথ) */}
          <div className="absolute w-[310px] h-[310px] rounded-full border border-white/5 border-dashed pointer-events-none" />

          {/* মেইন ইমেজ কন্টেইনার */}
          <div className="relative w-[260px] h-[260px] lg:w-[290px] lg:h-[290px] rounded-full border border-white/10 overflow-hidden shadow-2xl bg-[#12121A] z-10 group">
            <img 
              src="/ankur-profile.png" 
              alt="Ankur Biswas"
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* 🌟 লোগো অরবিট মেকার (মুখের ওপর না গিয়ে চারপাশ দিয়ে একটি লাইনে ঘুরবে) */}
          {techLogos.map((logo, index) => {
            // ৫টি লোগোকে সমান কোণে বিন্যাস করা হচ্ছে (360 / 5 = 72 ডিগ্রী ব্যবধানে)
            const startAngle = (index * 72) * (Math.PI / 180);
            const steps = 40; // স্মুথ অ্যানিমেশনের জন্য স্টেপ
            const xPath = [];
            const yPath = [];
            
            // ১৬০ পিক্সেল ব্যাসার্ধে বৃত্ত তৈরি, যাতে ইমেজ স্পর্শ না করে
            const radius = 165; 

            for (let i = 0; i <= steps; i++) {
              const angle = startAngle + (i * (2 * Math.PI / steps));
              xPath.push(Math.cos(angle) * radius);
              yPath.push(Math.sin(angle) * radius);
            }

            return (
              <motion.div
                key={index}
                className="absolute z-20 pointer-events-auto cursor-pointer"
                animate={{
                  x: xPath,
                  y: yPath,
                  scale: xPath.map((x, idx) => yPath[idx] > 0 ? 1.05 : 0.85), // নিচে আসলে বড়, ওপরে গেলে ছোট (3D এফেক্ট)
                }}
                transition={{
                  duration: logo.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.5 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {logo.svg}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ✍️ ডান পাশ: টেক্সট কন্টেন্ট (পেছনে মোশন এফেক্ট যুক্ত) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase relative z-10">
            Bold Brands.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">
              Sharp Execution.
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl lg:max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed relative z-10">
            Elevating visionary companies with impactful design solutions that capture attention and drive automated growth results.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
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