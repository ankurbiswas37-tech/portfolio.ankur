"use client";

import Link from 'next/link';

const targetProjects = [
  { 
    slug: "brand-identity", 
    title: "BRAND IDENTITY", 
    category: "Visual Systems & Strategy", 
    tag: "BRANDING",
    // 🎨 লোগো মকআপ থিম (Minimal Premium Logo Mockup)
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop", 
    subDesc: "Premium logos, corporate guidelines, and cohesive design assets built for Neon Hippo." 
  },
  { 
    slug: "video-editing", 
    title: "VIDEO EDITING", 
    category: "Ads & High-Retention Cuts", 
    tag: "VIDEO EDITING",
    // 🎬 ল্যাপটপ স্ক্রিনে প্রিমিয়ার প্রো এডিটিং প্রোজেক্ট (Premiere Pro Workspace on Laptop Screen)
    image: "https://images.unsplash.com/photo-1621528850026-0879e42aa15a?q=80&w=600&auto=format&fit=crop", 
    subDesc: "Engaging commercial ads, podcasts, and viral short-form contents built with precision." 
  },
  { 
    slug: "digital-design", 
    title: "DIGITAL DESIGN", 
    category: "Social Assets & UI Artifacts", 
    tag: "DIGITAL DESIGN",
    // 💻 সোশ্যাল মিডিয়া পোস্ট মকআপ গ্রিড (Social Media Post Layout Mockup)
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop", 
    subDesc: "High-end social media assets, marketing web pages, and custom digital assets." 
  },
  { 
    slug: "ghl-funnel-builder", 
    title: "GHL FUNNEL BUILDER", 
    category: "Marketing Automation Systems", 
    tag: "FUNNEL & CRM",
    // 🚀 ল্যান্ডিং পেজ এবং ফানেল ইউআই মকআপ (Landing Page / Funnel UI Mockup)
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=600&auto=format&fit=crop", 
    subDesc: "High-converting GoHighLevel landing pages, SaaS sub-account setup, and triggers." 
  },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6" id="portfolio">
      
      {/* টেক্সট হেডলাইন সেকশন */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
          Our Creative Workspace
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
          EXPLORE OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">EXPERT FIELDS</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-light leading-relaxed">
          Click on any domain below to view our complete design case studies, high-converting funnel automations, and premium video production assets.
        </p>
      </div>

      {/* ক্লিকেবল কার্ড গ্রিড লেআউট */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetProjects.map((project, index) => (
          <Link 
            href={`/portfolio/${project.slug}`} 
            key={index} 
            className="group bg-[#12121A] rounded-xl p-5 border border-white/5 relative overflow-hidden transition duration-300 hover:border-brand-neon/40 hover:shadow-glow block text-left"
          >
            {/* ছোট টপ ট্যাগ */}
            <span className="text-[10px] font-bold text-gray-500 tracking-widest block mb-4 uppercase">{project.tag}</span>
            
            {/* প্রিভিউ বক্স এরিয়া উইথ ইমেজ */}
            <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg mb-5 flex items-center justify-center border border-white/5 relative overflow-hidden transition group-hover:border-brand-purple/20">
              
              {/* নির্দিষ্ট কাজের মকআপ ইমেজ (হাই অপাসিটি ০.৬৫) */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                loading="lazy"
              />

              {/* হোভার করলে গ্লোয়িং ব্লার লেয়ার ও অ্যাকশন বাটন আসবে */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-[#0B0B0F]/40 to-[#0B0B0F]/80 opacity-0 group-hover:opacity-100 transition duration-300 z-10 flex items-center justify-center backdrop-blur-[1px]">
                <span className="bg-[#0B0B0F]/95 text-white text-[11px] font-bold px-4 py-2 rounded border border-white/10 tracking-widest uppercase inline-flex items-center gap-1.5 shadow-lg">
                  View Work Samples
                  <svg className="w-3 h-3 text-brand-neon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </div>
            </div>

            {/* বটম কার্ড টাইটেল ও সাবটাইটেল */}
            <h3 className="text-white font-black text-lg tracking-wide uppercase transition group-hover:text-brand-purple">{project.title}</h3>
            <p className="text-xs text-brand-neon mt-0.5 uppercase tracking-wider font-semibold">{project.category}</p>
            
            {/* সাব-হেডライン/ডেসক্রিপশন */}
            <p className="text-gray-400 text-xs mt-2.5 leading-relaxed font-normal normal-case">
              {project.subDesc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}