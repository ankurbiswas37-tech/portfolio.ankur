"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 📂 ৩ লেভেলের ডিপ ডাটা স্ট্রাকচার (ক্যাটাগরি -> ৬টি সাব-প্রোজেক্ট -> প্রতিটির আন্ডারে ৬টি লাইটবক্স ইমেজ)
const targetProjects = [
  { 
    slug: "brand-identity", 
    title: "BRAND IDENTITY", 
    category: "Visual Systems & Strategy", 
    tag: "BRANDING",
    image: "/brand identity.png", 
    subDesc: "Premium branding system tailored for Farwell + Gervase Premium Accommodation & Real Estate Business. Delivering architectural typography, warm corporate color palettes, and elevated marketing stationery.",
    // আপনার স্ক্রিনশট অনুযায়ী ৬টি আলাদা ব্র্যান্ডিং সেকশন/লোগো প্রোজেক্ট
    subProjects: [
      {
        id: 1,
        name: "LOGO",
        label: "Asset #1",
        coverImage: "/brand_identity_1.png",
        images: ["/brand_identity_1.png", "/brand_identity_2.png", "/brand_identity_3.png", "/brand_identity_4.png", "/brand_identity_5.png", "/brand_identity_6.png"]
      },
      {
        id: 2,
        name: "COLOR PALETTE",
        label: "Asset #2",
        coverImage: "/brand_identity_2.png",
        images: ["/brand_identity_2.png", "/brand_identity_1.png", "/brand_identity_3.png", "/brand_identity_4.png", "/brand_identity_5.png", "/brand_identity_6.png"]
      },
      {
        id: 3,
        name: "GUIDELINE",
        label: "Asset #3",
        coverImage: "/brand_identity_3.png",
        images: ["/brand_identity_3.png", "/brand_identity_1.png", "/brand_identity_2.png", "/brand_identity_4.png", "/brand_identity_5.png", "/brand_identity_6.png"]
      },
      {
        id: 4,
        name: "TYPOGRAPHY",
        label: "Asset #4",
        coverImage: "/brand_identity_4.png",
        images: ["/brand_identity_4.png", "/brand_identity_1.png", "/brand_identity_2.png", "/brand_identity_3.png", "/brand_identity_5.png", "/brand_identity_6.png"]
      },
      {
        id: 5,
        name: "BUSINESS CARD",
        label: "Asset #5",
        coverImage: "/brand_identity_5.png",
        images: ["/brand_identity_5.png", "/brand_identity_1.png", "/brand_identity_2.png", "/brand_identity_3.png", "/brand_identity_4.png", "/brand_identity_6.png"]
      },
      {
        id: 6,
        name: "BRAND PATTERN",
        label: "Asset #6",
        coverImage: "/brand_identity_6.png",
        images: ["/brand_identity_6.png", "/brand_identity_1.png", "/brand_identity_2.png", "/brand_identity_3.png", "/brand_identity_4.png", "/brand_identity_5.png"]
      }
    ]
  },
  { 
    slug: "video-editing", 
    title: "VIDEO EDITING", 
    category: "Ads & High-Retention Cuts", 
    tag: "VIDEO EDITING",
    image: "/video editing.png", 
    subDesc: "Engaging commercial ads, real estate walkthrough videos, and high-retention social content built with precision.",
    subProjects: [
      {
        id: 1,
        name: "COLOR GRADING",
        label: "Asset #1",
        coverImage: "/video_editing_1.png",
        images: ["/video_editing_1.png", "/video_editing_2.png", "/video_editing_3.png", "/video_editing_4.png", "/video_editing_5.png", "/video_editing_6.png"]
      },
      {
        id: 2,
        name: "TIMELINE",
        label: "Asset #2",
        coverImage: "/video_editing_2.png",
        images: ["/video_editing_2.png", "/video_editing_1.png", "/video_editing_3.png", "/video_editing_4.png", "/video_editing_5.png", "/video_editing_6.png"]
      },
      {
        id: 3,
        name: "MOTION GRAPHICS",
        label: "Asset #3",
        coverImage: "/video_editing_3.png",
        images: ["/video_editing_3.png", "/video_editing_1.png", "/video_editing_2.png", "/video_editing_4.png", "/video_editing_5.png", "/video_editing_6.png"]
      },
      {
        id: 4,
        name: "TRANSITIONS",
        label: "Asset #4",
        coverImage: "/video_editing_4.png",
        images: ["/video_editing_4.png", "/video_editing_1.png", "/video_editing_2.png", "/video_editing_3.png", "/video_editing_5.png", "/video_editing_6.png"]
      },
      {
        id: 5,
        name: "AUDIO WAVEFORM",
        label: "Asset #5",
        coverImage: "/video_editing_5.png",
        images: ["/video_editing_5.png", "/video_editing_1.png", "/video_editing_2.png", "/video_editing_3.png", "/video_editing_4.png", "/video_editing_6.png"]
      },
      {
        id: 6,
        name: "EXPORT FORMATS",
        label: "Asset #6",
        coverImage: "/video_editing_6.png",
        images: ["/video_editing_6.png", "/video_editing_1.png", "/video_editing_2.png", "/video_editing_3.png", "/video_editing_4.png", "/video_editing_5.png"]
      }
    ]
  },
  { 
    slug: "digital-design", 
    title: "DIGITAL DESIGN", 
    category: "Social Assets & UI Artifacts", 
    tag: "DIGITAL DESIGN",
    image: "/digital design.png", 
    subDesc: "High-end social media assets, commercial real estate web banners, and marketing templates.",
    subProjects: [
      {
        id: 1,
        name: "SOCIAL MEDIA DESIGN",
        label: "Asset #1",
        coverImage: "/digital_design_1.png",
        images: ["/digital_design_1.png", "/digital_design_2.png", "/digital_design_3.png", "/digital_design_4.png", "/digital_design_5.png", "/digital_design_6.png"]
      },
      {
        id: 2,
        name: "WEB BANNER",
        label: "Asset #2",
        coverImage: "/digital_design_2.png",
        images: ["/digital_design_2.png", "/digital_design_1.png", "/digital_design_3.png", "/digital_design_4.png", "/digital_design_5.png", "/digital_design_6.png"]
      },
      {
        id: 3,
        name: "EMAIL TEMPLATE",
        label: "Asset #3",
        coverImage: "/digital_design_3.png",
        images: ["/digital_design_3.png", "/digital_design_1.png", "/digital_design_2.png", "/digital_design_4.png", "/digital_design_5.png", "/digital_design_6.png"]
      },
      {
        id: 4,
        name: "UI DESIGN",
        label: "Asset #4",
        coverImage: "/digital_design_4.png",
        images: ["/digital_design_4.png", "/digital_design_1.png", "/digital_design_2.png", "/digital_design_3.png", "/digital_design_5.png", "/digital_design_6.png"]
      },
      {
        id: 5,
        name: "DIGITAL AD",
        label: "Asset #5",
        coverImage: "/digital_design_5.png",
        images: ["/digital_design_5.png", "/digital_design_1.png", "/digital_design_2.png", "/digital_design_3.png", "/digital_design_4.png", "/digital_design_6.png"]
      },
      {
        id: 6,
        name: "ICON SET",
        label: "Asset #6",
        coverImage: "/digital_design_6.png",
        images: ["/digital_design_6.png", "/digital_design_1.png", "/digital_design_2.png", "/digital_design_3.png", "/digital_design_4.png", "/digital_design_5.png"]
      }
    ]
  },
  { 
    slug: "ghl-funnel-builder", 
    title: "GHL FUNNEL BUILDER", 
    category: "Marketing Automation Systems", 
    tag: "FUNNEL & CRM",
    image: "/GHL funnel Build.png", 
    subDesc: "High-converting real estate lead capture funnels, property booking workflows, and CRM automation triggers.",
    subProjects: [
      {
        id: 1,
        name: "LANDING PAGE",
        label: "Asset #1",
        coverImage: "/ghl_funnel_1.png",
        images: ["/ghl_funnel_1.png", "/ghl_funnel_2.png", "/ghl_funnel_3.png", "/ghl_funnel_4.png", "/ghl_funnel_5.png", "/ghl_funnel_6.png"]
      },
      {
        id: 2,
        name: "OPT-IN FORM",
        label: "Asset #2",
        coverImage: "/ghl_funnel_2.png",
        images: ["/ghl_funnel_2.png", "/ghl_funnel_1.png", "/ghl_funnel_3.png", "/ghl_funnel_4.png", "/ghl_funnel_5.png", "/ghl_funnel_6.png"]
      },
      {
        id: 3,
        name: "SALES PAGE",
        label: "Asset #3",
        coverImage: "/ghl_funnel_3.png",
        images: ["/ghl_funnel_3.png", "/ghl_funnel_1.png", "/ghl_funnel_2.png", "/ghl_funnel_4.png", "/ghl_funnel_5.png", "/ghl_funnel_6.png"]
      },
      {
        id: 4,
        name: "EMAIL AUTOMATION",
        label: "Asset #4",
        coverImage: "/ghl_funnel_4.png",
        images: ["/ghl_funnel_4.png", "/ghl_funnel_1.png", "/ghl_funnel_2.png", "/ghl_funnel_3.png", "/ghl_funnel_5.png", "/ghl_funnel_6.png"]
      },
      {
        id: 5,
        name: "CHECKOUT PAGE",
        label: "Asset #5",
        coverImage: "/ghl_funnel_5.png",
        images: ["/ghl_funnel_5.png", "/ghl_funnel_1.png", "/ghl_funnel_2.png", "/ghl_funnel_3.png", "/ghl_funnel_4.png", "/ghl_funnel_6.png"]
      },
      {
        id: 6,
        name: "THANK YOU PAGE",
        label: "Asset #6",
        coverImage: "/ghl_funnel_6.png",
        images: ["/ghl_funnel_6.png", "/ghl_funnel_1.png", "/ghl_funnel_2.png", "/ghl_funnel_3.png", "/ghl_funnel_4.png", "/ghl_funnel_5.png"]
      }
    ]
  },
];

export default function PortfolioGrid() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [selectedSubProjectId, setSelectedSubProjectId] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentProject = targetProjects.find(p => p.slug === activeSlug);
  const currentSubProject = currentProject?.subProjects.find(sp => sp.id === selectedSubProjectId);

  const handleCardClick = (slug: string) => {
    if (activeSlug === slug) {
      setActiveSlug(null);
      setSelectedSubProjectId(null);
    } else {
      setActiveSlug(slug);
      setSelectedSubProjectId(null); // ক্যাটাগরি চেঞ্জ হলে আগের সাব-প্রোজেক্ট রিসেট হবে
      setTimeout(() => {
        const element = document.getElementById("dynamic-vault-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleSubProjectClick = (id: number) => {
    setSelectedSubProjectId(id);
    setLightboxIndex(0); // সাব-প্রোজেক্টে ক্লিক করলেই ১ম ইমেজ দিয়ে লাইটবক্স সাথে সাথে ওপেন হবে
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentSubProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentSubProject.images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentSubProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentSubProject.images.length) % currentSubProject.images.length);
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

      {/* 🔓 ৬টি আলাদা সাব-প্রোজেক্ট গ্যালারি গ্রিড (যেমন: LOGO, COLOR PALETTE...) */}
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

              {/* 🖼️ ৬টি আলাদা আলাদা প্রোজেক্ট কার্ড গ্রিড লেআউট (image_b76b09.jpg অনুযায়ী) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProject.subProjects.map((subProject) => (
                  <div 
                    key={subProject.id}
                    onClick={() => handleSubProjectClick(subProject.id)}
                    className="group bg-[#12121A] border border-white/5 hover:border-brand-purple/40 rounded-xl p-4 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-center relative overflow-hidden w-full aspect-[3/2]"
                  >
                    {/* ব্যাকগ্রাউন্ড কভার লোগো ইমেজ */}
                    <img 
                      src={subProject.coverImage} 
                      alt={subProject.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition duration-500"
                    />
                    
                    {/* কালো ফেড ওভারলে ও ক্লিন টেক্সট লেবেল */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/10 via-[#0B0B0F]/40 to-[#0B0B0F]/90 z-10 flex flex-col items-center justify-end pb-5 w-full h-full">
                      <h4 className="text-white text-base font-black tracking-wider uppercase px-2 text-center drop-shadow-md transition duration-300 group-hover:text-brand-neon">{subProject.name}</h4>
                      <span className="text-[10px] text-brand-purple font-bold uppercase mt-0.5 tracking-widest opacity-80">{subProject.label}</span>
                    </div>

                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-brand-neon/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="w-1.5 h-1.5 bg-brand-neon rounded-full shadow-[0_0_8px_#00F5FF]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* প্রজেক্ট কোর ডিটেইলস প্যানেল (অল ওভার ব্র্যান্ডের ডেসক্রিপশন হিসেবে ফিক্সড) */}
              <div className="mt-12 bg-[#12121A] border border-white/5 rounded-xl p-6 text-left">
                <h4 className="text-white font-bold text-base uppercase tracking-wider">PROJECT CORE DETAILS</h4>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed font-light">{currentProject.subDesc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🖼️ ফুলস্ক্রিন প্রিমিয়াম লাইটবক্স স্লাইডার (প্রতিটি আলাদা কার্ডের আন্ডারে ৬টি আলাদা ইমেজ দেখাবে) */}
      <AnimatePresence>
        {lightboxIndex !== null && currentSubProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setLightboxIndex(null);
              setSelectedSubProjectId(null);
            }}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 md:p-10"
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white text-sm font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded border border-white/10 z-30">
              CLOSE ×
            </button>

            {/* বামে যাওয়ার অ্যারো বাটন */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-purple hover:border-brand-neon transition-all z-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* মেইন ইমেজ ডিসপ্লে এরিয়া */}
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
                src={currentSubProject.images[lightboxIndex]} 
                alt={currentSubProject.name} 
                className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <div className="absolute bottom-[-65px] left-0 right-0 text-center">
                <h4 className="text-white text-sm md:text-base font-black uppercase tracking-wider">
                  {currentSubProject.name} GALLERY
                </h4>
                <p className="text-brand-neon text-xs font-bold uppercase mt-0.5">
                  IMAGE {lightboxIndex + 1} OF {currentSubProject.images.length}
                </p>
              </div>
            </motion.div>

            {/* ডানে যাওয়ার অ্যারো বাটন */}
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