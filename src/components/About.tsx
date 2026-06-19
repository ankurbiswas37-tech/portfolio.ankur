"use client";

import { motion } from 'framer-motion';

const stats = [
  { value: "5+", label: "Years Experience", desc: "Crafting visual identities & scalable workflows" },
  { value: "150+", label: "Projects Delivered", desc: "High-converting funnels & branding assets" },
  { value: "99%", label: "Client Satisfaction", desc: "From global agencies to premium local brands" },
];

const coreSkills = [
  "GoHighLevel Automation",
  "UI/UX Funnel Architecture",
  "Brand Strategy & Systems",
  "High-Retention Video Editing",
  "Visual Art & Direction",
  "SaaS Setup & Workflows"
];

export default function About() {
  return (
    <section className="relative w-full bg-[#07070A] py-24 px-6 border-b border-white/5 overflow-hidden" id="about">
      
      {/* 🔮 ব্যাকগ্রাউন্ড মোশন এলিমেন্ট সেকশন */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        
        {/* গ্লোইং ব্যাকগ্রাউন্ড লাইট */}
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[130px]" />

        {/* ডাইনামিক ঘূর্ণায়মান আর্কিটেকচার গ্রিড ও অরবিট লাইনস */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* বড় আউটার মোশন রিং */}
          <motion.circle 
            cx="90%" cy="50%" r="280" 
            stroke="url(#aboutNeonGradient)" strokeWidth="1" strokeDasharray="8 8" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "90% 50%" }}
          />
          {/* ছোট ইনার মোশন রিং */}
          <motion.circle 
            cx="10%" cy="80%" r="180" 
            stroke="url(#aboutPurpleGradient)" strokeWidth="0.75" strokeDasharray="4 4" fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "10% 80%" }}
          />
          <defs>
            <linearGradient id="aboutPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="aboutNeonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ফ্লোটিং অটোমেশন নোডস (ধীর গতিতে শূন্যে ভাসমান কণা) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-brand-purple/30 shadow-[0_0_8px_#A855F7]' : 'bg-brand-neon/30 shadow-[0_0_8px_#00F5FF]'}`}
            style={{
              width: Math.random() * 4 + 4 + 'px',
              height: Math.random() * 4 + 4 + 'px',
              left: Math.random() * 80 + 10 + '%',
              top: Math.random() * 70 + 15 + '%',
            }}
            animate={{
              y: [0, Math.random() * -50 - 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ✍️ বাম পাশ: ইন্ট্রোডাকশন ও স্টোরি */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
                Bridging Creative Art <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">
                  With Marketing Logic
                </span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              I am Ankur Biswas, a multi-disciplinary Graphic Designer, Video Editor, and Automation Specialist based in Dhaka, Bangladesh. Over the past 5 years, I’ve dedicated my workspace to empowering visionary agencies and businesses with bold visual statements and bulletproof marketing systems.
            </p>

            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              My expertise isn’t just about making things look stunning—it's about making them convert. From building intricate GoHighLevel funnel architectures and deep marketing automations to direct video editing and premium brand identities (like Neon Hippo), I structure digital experiences that drive real revenue.
            </p>

            {/* কোর স্কিল ট্যাগস */}
            <div className="pt-4">
              <h4 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Core Architecture</h4>
              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs font-semibold text-white bg-[#12121A] border border-white/5 px-4 py-2 rounded-full tracking-wide transition duration-300 hover:border-brand-neon/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 📊 ডান পাশ: কাউন্টার ও প্রফেশনাল স্ট্যাটস */}
          <div className="lg:col-span-5 space-y-6 w-full lg:mt-16">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-[#12121A] border border-white/5 rounded-2xl p-6 relative overflow-hidden group transition duration-300 hover:border-brand-purple/30 text-left"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* গ্লো লাইন ইফেক্ট */}
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-brand-purple to-brand-neon opacity-70" />
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-neon transition-all duration-300">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-brand-neon uppercase tracking-wider mt-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}