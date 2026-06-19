"use client";

import { motion } from 'framer-motion';

const services = [
  { id: "1.", title: "BRAND IDENTITY", desc: "Crafting impactful visual systems, logos, and brand strategy for lasting impressions." },
  { id: "2.", title: "VIDEO EDITING", desc: "Editing compelling Ads, Podcasts, youtube videos, and marketing collateral for physical media." },
  { id: "3.", title: "DIGITAL DESIGN", desc: "Creating engaging online experiences, social media assets, and digital campaigns." },
  { id: "4.", title: "GHL FUNNEL BUILDER", desc: "User Interface and User Experience design for intuitive, functional,automative and visually stunning digital products." },
];

export default function Services() {
  return (
    <section className="w-full py-20 bg-[#0B0B0F] px-6" id="services">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* বাম পাশ: সার্ভিস লিস্ট */}
        <div>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Service</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 mb-10 tracking-tight">MY SERVICES</h2>
          
          <div className="space-y-8">
            {services.map((svc) => (
              <div key={svc.id} className="group border-b border-white/5 pb-6 flex gap-6 items-start">
                <span className="text-2xl font-bold text-brand-neon">{svc.id}</span>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-wide transition group-hover:text-brand-purple">{svc.title}</h4>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ডান পাশ: লোগো ও নিয়ন জ্যামিতিক মোশন কম্বিনেশন */}
        <div className="relative aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group">
          
          {/* গ্লোইং ব্যাকগ্রাউন্ড লাইট */}
          <div className="absolute w-72 h-72 bg-brand-purple/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-brand-purple/25 transition-all duration-700"></div>
          
          <svg className="w-full h-full p-6 relative z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* ব্যাকগ্রাউন্ড অটোমেশন ও ফানেল গ্রিড */}
            <g opacity="0.15">
              <circle cx="200" cy="200" r="140" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="90" stroke="#00F5FF" strokeWidth="0.5" strokeDasharray="6 6" />
              <line x1="60" y1="200" x2="340" y2="200" stroke="#A855F7" strokeWidth="0.5" />
              <line x1="200" y1="60" x2="200" y2="340" stroke="#A855F7" strokeWidth="0.5" />
            </g>

            {/* মোশন পার্ট ১: আউটার ফ্রেম রোটেশন (Photoshop & Illustrator Orbit) */}
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            >
              <rect x="75" y="75" width="250" height="250" rx="20" stroke="url(#purpleGradient)" strokeWidth="1.5" opacity="0.7" />
              
              {/* 🎨 Adobe Illustrator (Ai) Logo - Top Left */}
              <g transform="translate(60, 60)">
                <rect x="0" y="0" width="30" height="30" rx="6" fill="#1A0B00" stroke="#FF9A00" strokeWidth="1.5" />
                <text x="15" y="21" fill="#FF9A00" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Ai</text>
              </g>

              {/* 📷 Adobe Photoshop (Ps) Logo - Bottom Right */}
              <g transform="translate(310, 310)">
                <rect x="0" y="0" width="30" height="30" rx="6" fill="#001C2A" stroke="#00C8FF" strokeWidth="1.5" />
                <text x="15" y="21" fill="#00C8FF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Ps</text>
              </g>
            </motion.g>

            {/* মোশন পার্ট ২: ইনার ফ্রেম রোটেশন (Premiere Pro & GHL Orbit - Counter Rotation) */}
            <motion.g
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            >
              <rect x="110" y="110" width="180" height="180" rx="14" stroke="url(#neonGradient)" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
              
              {/* 🎬 Adobe Premiere Pro (Pr) Logo - Top Right */}
              <g transform="translate(280, 95)">
                <rect x="0" y="0" width="30" height="30" rx="6" fill="#15002B" stroke="#EA77FF" strokeWidth="1.5" />
                <text x="15" y="21" fill="#EA77FF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Pr</text>
              </g>

              {/* 🚀 GoHighLevel (GHL Mini Custom Node) - Bottom Left */}
              <g transform="translate(90, 275)">
                <circle cx="15" cy="15" r="15" fill="#111827" stroke="#00F5FF" strokeWidth="1.5" />
                {/* GHL আইকনিক ফানেল ডটেড শেপ মেটাফোর */}
                <path d="M9 10 H21 L17 16 V21 L13 19 V16 Z" fill="#00F5FF" opacity="0.9"/>
              </g>
            </motion.g>

            {/* মোশন পার্ট ৩: সেন্টার ক্রিয়েটিভ ওয়েভ (ভিডিও ও ডিজাইন রিদম) */}
            <path d="M 130 200 Q 165 140, 200 200 T 270 200" stroke="url(#neonGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <motion.path
              d="M 130 200 Q 165 260, 200 200 T 270 200"
              stroke="#A855F7" strokeWidth="1" strokeLinecap="round" opacity="0.5"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />

            {/* কোর ফোকাল গ্লোয়িং সেন্টার */}
            <circle cx="200" cy="200" r="6" fill="#00F5FF" />
            <motion.circle
              cx="200" cy="200" r="12" stroke="#00F5FF" strokeWidth="1" opacity="0.5"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* কালার গ্রাডিয়েন্ট ডেফিনিশন */}
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
          </svg>

          {/* লাইট গ্লাস রিফ্লেকশন ওভারলে */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/5 via-transparent to-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}