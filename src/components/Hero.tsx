"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0B0B0F] text-left overflow-hidden border-b border-white/5 py-16 lg:py-24 px-6">
      
      {/* 🔮 ব্যাকগ্রাউন্ডে ক্রিয়েটিভ অ্যানিমেটেড মোশন গ্রাফিক্স */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* গ্লোইং লাইট ফোকাস */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px]" />

        {/* ডাইনামিক ইন্টারঅ্যাক্টিভ ভেক্টর লাইনস ও অরবিট */}
        <svg className="absolute inset-0 w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            cx="20%" cy="30%" r="150" 
            stroke="url(#heroPurpleGradient)" strokeWidth="1" strokeDasharray="6 6" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20% 30%" }}
          />
          <motion.circle 
            cx="80%" cy="60%" r="220" 
            stroke="url(#heroNeonGradient)" strokeWidth="0.5" strokeDasharray="4 8" fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "80%" }}
          />
          <defs>
            <linearGradient id="heroPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ফ্লোটিং নিয়ন পার্টিকলস (Floating Digital Nodes) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-brand-purple/40 shadow-[0_0_10px_#A855F7]' : 'bg-brand-neon/40 shadow-[0_0_10px_#00F5FF]'}`}
            style={{
              width: Math.random() * 4 + 3 + 'px',
              height: Math.random() * 4 + 3 + 'px',
              left: Math.random() * 90 + 5 + '%',
              top: Math.random() * 80 + 10 + '%',
            }}
            animate={{
              y: [0, Math.random() * -40 - 20, 0],
              opacity: [0.8, 0.8, 0.8]
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
          />
        ))}
      </div>

      {/* ২ কলামের রেস্পেনসিভ গ্রিড: বামে ছোট ইমেজ এবং ডানে টেক্সট */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* 📸 বাম পাশ: ইমেজ কন্টেইনার (১২ ভাগের মধ্যে ৪ ভাগ জায়গা নিয়ে সাইজ কমানো হয়েছে) */}
        <div className="lg:col-span-5 w-full max-w-[340px] lg:max-w-none mx-auto relative group">
          
          {/* ইমেজের পেছনে স্মুথ নিয়ন গ্লো */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-neon rounded-2xl blur-md opacity-75 group-hover:opacity-75 transition duration-500"></div>
          
          {/* মেইন ইমেজ ফ্রেম */}
          <div className="relative w-full aspect-[5/5] bg-[#12121A] rounded-2xl border border-white/10 overflow-hidden shadow-xl">
            <img 
              src="/linkedin Ankur.png"
              alt="Ankur Biswas"
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const placeholder = parent.querySelector('.img-placeholder');
                  if (placeholder) placeholder.classList.remove('hidden');
                }
              }}
            />

            {/* ফলব্যাক প্লেসহোল্ডার */}
            <div className="img-placeholder hidden absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#12121A] to-black">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-neon mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">Image Ready</p>
            </div>
          </div>
        </div>

        {/* ✍️ ডান পাশ: টেক্সট কন্টেন্ট (১২ ভাগের মধ্যে ৮ ভাগ জায়গা পাবে) */}
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