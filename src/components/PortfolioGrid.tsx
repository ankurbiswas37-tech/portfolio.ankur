"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 📂 প্রতিটা ক্যাটাগরির জন্য ৬টি করে সম্পূর্ণ আলাদা ইমেজের ডাটা স্ট্রাকচার
const targetProjects = [
  { 
    slug: "brand-identity", 
    title: "BRAND IDENTITY", 
    category: "Visual Systems & Strategy", 
    tag: "BRANDING",
    image: "/brand identity.png", 
    subDesc: "Premium logos, corporate guidelines, and cohesive design assets built for Neon Hippo.",
    subAssets: [
      { id: 1, name: "MAIN CONCEPT ASSET", label: "Asset #1", src: "/brand_identity_1.png" },
      { id: 2, name: "ALTERNATIVE LAYOUT DESIGN", label: "Asset #2", src: "/brand_identity_2.png" },
      { id: 3, name: "MOBILE RESPONSIVE BLUEPRINT", label: "Asset #3", src: "/brand_identity_3.png" },
      { id: 4, name: "TYPOGRAPHY & COLOR SYSTEM", label: "Asset #4", src: "/brand_identity_4.png" },
      { id: 5, name: "HIGH-FIDELITY WIREFRAME", label: "Asset #5", src: "/brand_identity_5.png" },
      { id: 6, name: "FINAL PRODUCTION DELIVERABLE", label: "Asset #6", src: "/brand_identity_6.png" }
    ]
  },
  { 
    slug: "video-editing", 
    title: "VIDEO EDITING", 
    category: "Ads & High-Retention Cuts", 
    tag: "VIDEO EDITING",
    image: "/video editing.png", 
    subDesc: "Engaging commercial ads, podcasts, and viral short-form contents built with precision.",
    subAssets: [
      { id: 1, name: "COLOR GRADING SUITE", label: "Asset #1", src: "/video_editing_1.png" },
      { id: 2, name: "TIMELINE BREAKDOWN", label: "Asset #2", src: "/video_editing_2.png" },
      { id: 3, name: "MOTION GRAPHICS PREVIEW", label: "Asset #3", src: "/video_editing_3.png" },
      { id: 4, name: "TRANSITIONS VAULT", label: "Asset #4", src: "/video_editing_4.png" },
      { id: 5, name: "AUDIO WAVEFORM EDIT", label: "Asset #5", src: "/video_editing_5.png" },
      { id: 6, name: "EXPORT FORMATS GRID", label: "Asset #6", src: "/video_editing_6.png" }
    ]
  },
  { 
    slug: "digital-design", 
    title: "DIGITAL DESIGN", 
    category: "Social Assets & UI Artifacts", 
    tag: "DIGITAL DESIGN",
    image: "/digital design.png", 
    subDesc: "High-end social media assets, marketing web pages, and custom digital assets.",
    subAssets: [
      { id: 1, name: "SOCIAL MEDIA DESIGN BLOCK", label: "Asset #1", src: "/digital_design_1.png" },
      { id: 2, name: "WEB BANNER VARIANT", label: "Asset #2", src: "/digital_design_2.png" },
      { id: 3, name: "EMAIL TEMPLATE SYSTEM", label: "Asset #3", src: "/digital_design_3.png" },
      { id: 4, name: "UI DESIGN COMPONENT", label: "Asset #4", src: "/digital_design_4.png" },
      { id: 5, name: "DIGITAL AD TARGET", label: "Asset #5", src: "/digital_design_5.png" },
      { id: 6, name: "ICON SET SCHEMATIC", label: "Asset #6", src: "/digital_design_6.png" }
    ]
  },
  { 
    slug: "ghl-funnel-builder", 
    title: "GHL FUNNEL BUILDER", 
    category: "Marketing Automation Systems", 
    tag: "FUNNEL & CRM",
    image: "/GHL funnel Build.png", 
    subDesc: "High-converting GoHighLevel landing pages, SaaS sub-account setup, and triggers.",
    subAssets: [
      { id: 1, name: "HIGH-CONVERTING LANDING PAGE", label: "Asset #1", src: "/ghl_funnel_1.png" },
      { id: 2, name: "OPT-IN FORM SCHEMA", label: "Asset #2", src: "/ghl_funnel_2.png" },
      { id: 3, name: "SALES PAGE AUTOMATION", label: "Asset #3", src: "/ghl_funnel_3.png" },
      { id: 4, name: "EMAIL AUTOMATION TRIGGERS", label: "Asset #4", src: "/ghl_funnel_4.png" },
      { id: 5, name: "CHECKOUT PAGE CONVERSION", label: "Asset #5", src: "/ghl_funnel_5.png" },
      { id: 6, name: "THANK YOU PAGE SPEC", label: "Asset #6", src: "/ghl_funnel_6.png" }
    ]
  },
];

export default function PortfolioGrid() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentProject = targetProjects.find(p => p.slug === activeSlug);

  const handleCardClick = (slug: string) => {
    if (activeSlug === slug) {
      setActiveSlug(null);
    } else {
      setActiveSlug(slug);
      setTimeout(() => {
        const element = document.getElementById("dynamic-vault-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentProject.subAssets.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentProject.subAssets.length) % currentProject.subAssets.length);
    }
  };

  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6 select-none" id="portfolio">
      
      {/* 🧠 হেডলাইন এরিয়া */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
          My Creative Workspace
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
          EXPLORE MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">EXPERT FIELDS</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl mx-auto font-light leading-relaxed">
          Click on any field below to trigger the dynamic asset vault, core designs, and high-retention pipelines.
        </p>
      </div>

      {/* 🎴 মেইন ৪টি কার্ড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {targetProjects.map((project, index) => {
          const isSelected = activeSlug === project.slug;
          return (
            <div 
              onClick={() => handleCardClick(project.slug)}
              key={index} 
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 block text-left ${
                isSelected 
                  ? 'bg-[#151522] border-brand-neon shadow-glow' 
                  : 'bg-[#12121A] border-white/5 hover:border-brand-neon/40 hover:shadow-glow'
              }`}
            >
              <span className="text-[10px] font-bold text-gray-500 tracking-widest block mb-4 uppercase">{project.tag}</span>
              
              <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg mb-5 flex items-center justify-center border border-white/5 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]/90 z-10 flex items-end p-3">
                  <span className="text-[10px] bg-brand-neon/20 border border-brand-neon/30 text-brand-neon px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                    {isSelected ? "Vault Open" : "Open Gallery"}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-black text-lg tracking-wide uppercase">{project.title}</h3>
              <p className="text-xs text-brand-neon mt-0.5 uppercase tracking-wider font-semibold">{project.category}</p>
            </div>
          );
        })}
      </div>

      {/* 🔓 ৬টি আলাদা সাব-অ্যাসেট গ্যালারি গ্রিড */}
      <div id="dynamic-vault-section" className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {activeSlug && currentProject && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto border-t border-white/10 pt-16"
            >
              <div className="text-left mb-10">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                  {currentProject.title} VAULT
                </h3>
                <p className="text-gray-400 text-sm mt-2 font-light max-w-3xl">
                  Welcome to the official workspace vault for <span className="text-white font-bold">{currentProject.title}</span>. Below are the design outputs, assets, and project results delivered to my clients.
                </p>
                <span className="text-xs font-bold text-gray-500 tracking-widest block uppercase mt-8 border-b border-white/5 pb-2">
                  UPLOADED WORK SAMPLES & DELIVERABLES
                </span>
              </div>

              {/* 🖼️ এখানে এখন প্রতিটি অ্যাসেটের নিজস্ব ইউনিক ছবি (asset.src) লোড হবে */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProject.subAssets.map((asset, index) => (
                  <div 
                    key={asset.id}
                    onClick={() => setLightboxIndex(index)}
                    className="group bg-[#12121A] border border-white/5 hover:border-brand-purple/40 rounded-xl p-4 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-center min-h-[240px] relative overflow-hidden"
                  >
                    <img 
                      src={asset.src} 
                      alt={asset.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/20 to-[#0B0B0F]/90 z-10 flex flex-col items-center justify-end pb-4 w-full h-full">
                      <h4 className="text-white text-sm font-black tracking-wide uppercase px-2 text-center drop-shadow-md">{asset.name}</h4>
                      <span className="text-[10px] text-brand-neon font-semibold uppercase mt-0.5 tracking-wider">{asset.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#12121A] border border-white/5 rounded-xl p-6 text-left">
                <h4 className="text-white font-bold text-base uppercase tracking-wider">PROJECT CORE DETAILS</h4>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed font-light">{currentProject.subDesc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🖼️ ফুলস্ক্রিন প্রিমিয়াম লাইটবক্স স্লাইডার (নেক্সট/প্রিভিয়াস ওয়ার্কিং) */}
      <AnimatePresence>
        {lightboxIndex !== null && currentProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 md:p-10 animate-fade"
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white text-sm font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded border border-white/10 z-30">
              CLOSE ×
            </button>

            {/* বামে যাওয়ার অ্যারো */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-purple hover:border-brand-neon transition-all z-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* মেইন ইমেজ কন্টেইনার */}
            <motion.div 
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[75vh] md:max-h-[80vh] flex flex-col items-center z-20"
            >
              <img 
                src={currentProject.subAssets[lightboxIndex].src} 
                alt={currentProject.subAssets[lightboxIndex].name} 
                className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <div className="absolute bottom-[-65px] left-0 right-0 text-center">
                <h4 className="text-white text-sm md:text-base font-black uppercase tracking-wider">
                  {currentProject.subAssets[lightboxIndex].name}
                </h4>
                <p className="text-brand-neon text-xs font-bold uppercase mt-0.5">
                  {currentProject.subAssets[lightboxIndex].label} • {lightboxIndex + 1} OF {currentProject.subAssets.length}
                </p>
              </div>
            </motion.div>

            {/* ডানে যাওয়ার অ্যারো */}
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-purple hover:border-brand-neon transition-all z-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}