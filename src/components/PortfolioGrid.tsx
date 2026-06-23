"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const targetProjects = [
  { 
    slug: "brand-identity", 
    title: "BRAND IDENTITY", 
    category: "Visual Systems & Strategy", 
    tag: "BRANDING",
    image: "/brand identity.png", 
    subDesc: "Premium corporate branding suites, visual identity systems, and brand guidelines crafted across commercial industries.",
    subCategories: [
      {
        id: 1, 
        name: "FARWELL + GERVASE", 
        label: "Asset #1", 
        cover: "/f&g_logo.png",
        website: "www.farwellgervase.com",
        description: "A premium luxury heritage brand specializing in bespoke advisory and high-end corporate consulting. The visual system focuses on timeless elegance, utilizing structured grid lines and a classic monochrome base palette.",
        nestedImages: [
          { name: "F&G Logo Usage Sheet", src: "/f&g_logo.png" },
          { name: "F&G Brand Palette Spec", src: "/brand_identity_2.png" },
          { name: "F&G Core Guidelines Overview", src: "/brand_identity_3.png" },
          { name: "F&G Typography Blueprint", src: "/brand_identity_4.png" },
          { name: "F&G Business Card Station", src: "/brand_identity_5.png" },
          { name: "F&G Packaging Concept Pattern", src: "/brand_identity_6.png" }
        ]
      },
      {
        id: 2, 
        name: "DGM CONTRACTING", 
        label: "Asset #2", 
        cover: "/dmg_logo.png",
        website: "www.dgmcontracting.com",
        description: "A heavy-duty industrial construction and infrastructure contracting firm. The branding project delivers an impactful corporate design language, emphasizing stability, structural strength, and high-contrast visibility.",
        nestedImages: [
          { name: "DGM Identity Logo Sheet", src: "/dmg_logo.png" },
          { name: "DGM Luxury Color Palette", src: "/dmg_logo2.png" },
          { name: "DGM Brand Guidelines Manual", src: "/dmg_logo3.png" },
          { name: "DGM Interior Typography Specimen", src: "/dmg_logo4.png" },
          { name: "DGM Executive Business Card Mockup", src: "/dmg_logo5.png" },
          { name: "DGM Premium Folder Pattern Design", src: "/dmg_logo6.png" }
        ]
      },
      {
        id: 3, 
        name: "INFINIX SYSTEMS", 
        label: "Asset #3", 
        cover: "/infinix_logo.png",
        website: "www.infinixsystems.io",
        description: "A cutting-edge software solutions and tech automation provider. The visual identity incorporates dynamic geometry, futuristic typography, and precise alignment schemes to represent tech innovation and digital security platforms.",
        nestedImages: [
          { name: "Infinix Identity Guidelines Overview", src: "/infinix_logo.png" },
          { name: "Infinix Color Palette Spectrum", src: "/infinix_logo2.png" },
          { name: "Infinix Clear Space Diagram Rules", src: "/infinix_logo3.png" },
          { name: "Infinix Core Typography Deck", src: "/infinix_logo4.png" },
          { name: "Infinix Stationery Mockup Grid", src: "/infinix_logo5.png" },
          { name: "Infinix Accent Branding Element", src: "/infinix_logo6.png" }
        ]
      },
      {
        id: 4, 
        name: "HOMEVY PLATFORM", 
        label: "Asset #4", 
        cover: "/homvay_logo.png",
        website: "www.homevyplatform.net",
        description: "A modern property management and luxury real estate portal. The visual aesthetics are designed to feel clean, minimal, and highly professional, utilizing premium architectural accents and spacious typography.",
        nestedImages: [
          { name: "Homevy Brand Identity Sheet", src: "/homvay_logo.png" },
          { name: "Homevy Real Estate Color Spectrum", src: "/homvay_logo2.png" },
          { name: "Homevy Identity Guidelines Manual", src: "/homvay_logo3.png" },
          { name: "Homevy Property Alphabet Typography", src: "/homvay_logo4.png" },
          { name: "Homevy Agent Business Card Design", src: "/homvay_logo5.png" },
          { name: "Homevy Luxury Property Brochure Pattern", src: "/homvay_logo6.png" }
        ]
      },
      {
        id: 5, 
        name: "DAVID ALLEN CAPITAL", 
        label: "Asset #5", 
        cover: "/dac_logo.png",
        website: "www.davidallencapital.com",
        description: "An elite commercial business funding and financial advisory firm. The branding architecture revolves around trust, authority, and premium corporate aesthetics, using sharp geometric patterns and financial typography assets.",
        nestedImages: [
          { name: "DAC Business Funding Logo Vault", src: "/dac_logo.png" },
          { name: "DAC Corporate Color Spectrum", src: "/dac_logo2.png" },
          { name: "DAC Brand Guidelines Manual", src: "/dac_logo3.png" },
          { name: "DAC Corporate Finance Typography", src: "/dac_logo4.png" },
          { name: "DAC Account Executive Business Card", src: "/dac_logo5.png" },
          { name: "DAC Premium Notebook & Pattern Design", src: "/dac_logo6.png" }
        ]
      },
      {
        id: 6, 
        name: "VE+ SOLUTIONS", 
        label: "Asset #6", 
        cover: "/ve+_logo.png",
        website: "www.veplusaudit.com",
        description: "A specialized cost auditing, analytics, and business scaling consultancy. The complete branding suite utilizes sleek geometric lines and structured cost-architecture layouts to showcase operational precision and clarity.",
        nestedImages: [
          { name: "VE+ Cost Auditing Mockup Sheet", src: "/ve+_logo.png" },
          { name: "VE+ Brand Color Palette", src: "/ve+_logo2.png" },
          { name: "VE+ Corporate Guidelines Layout", src: "/ve+_logo3.png" },
          { name: "VE+ Geometry Type Treatment", src: "/ve+_logo4.png" },
          { name: "VE+ Professional Business Card", src: "/ve+_logo5.png" },
          { name: "VE+ Cost Architecture Pattern", src: "/ve+_logo6.png" }
        ]
      }
    ]
  },
  { 
    slug: "video-editing", 
    title: "VIDEO EDITING", 
    category: "Ads & High-Retention Cuts", 
    tag: "VIDEO EDITING",
    image: "/video editing.png", 
    subDesc: "Engaging commercial ads and high-retention social content built with precision.",
    subCategories: [
      { id: 1, name: "COLOR GRADING", label: "Asset #1", cover: "/video_editing_1.png", nestedImages: [{ name: "Grade 1", src: "/video_editing_1.png" }, { name: "Grade 2", src: "/video_editing_2.png" }, { name: "Grade 3", src: "/video_editing_3.png" }, { name: "Grade 4", src: "/video_editing_4.png" }, { name: "Grade 5", src: "/video_editing_5.png" }, { name: "Grade 6", src: "/video_editing_6.png" }] },
      { id: 2, name: "TIMELINE", label: "Asset #2", cover: "/video_editing_2.png", nestedImages: [{ name: "Cut 1", src: "/video_editing_2.png" }, { name: "Cut 2", src: "/video_editing_1.png" }, { name: "Cut 3", src: "/video_editing_3.png" }, { name: "Cut 4", src: "/video_editing_4.png" }, { name: "Cut 5", src: "/video_editing_5.png" }, { name: "Cut 6", src: "/video_editing_6.png" }] },
      { id: 3, name: "MOTION GRAPHICS", label: "Asset #3", cover: "/video_editing_3.png", nestedImages: [{ name: "FX 1", src: "/video_editing_3.png" }, { name: "FX 2", src: "/video_editing_1.png" }, { name: "FX 3", src: "/video_editing_2.png" }, { name: "FX 4", src: "/video_editing_4.png" }, { name: "FX 5", src: "/video_editing_5.png" }, { name: "FX 6", src: "/video_editing_6.png" }] }
    ]
  },
  { 
    slug: "digital-design", 
    title: "DIGITAL DESIGN", 
    category: "Social Assets & UI Artifacts", 
    tag: "DIGITAL DESIGN",
    image: "/digital design.png", 
    subDesc: "High-end social media assets, marketing web pages, and custom digital assets.",
    subCategories: [
      { id: 1, name: "SOCIAL MEDIA DESIGN", label: "Asset #1", cover: "/digital_design_1.png", nestedImages: [{ name: "Social 1", src: "/digital_design_1.png" }, { name: "Social 2", src: "/digital_design_2.png" }, { name: "Social 3", src: "/digital_design_3.png" }, { name: "Social 4", src: "/digital_design_4.png" }, { name: "Social 5", src: "/digital_design_5.png" }, { name: "Social 6", src: "/digital_design_6.png" }] },
      { id: 2, name: "WEB BANNER", label: "Asset #2", cover: "/digital_design_2.png", nestedImages: [{ name: "Banner 1", src: "/digital_design_2.png" }, { name: "Banner 2", src: "/digital_design_1.png" }, { name: "Banner 3", src: "/digital_design_3.png" }, { name: "Banner 4", src: "/digital_design_4.png" }, { name: "Banner 5", src: "/digital_design_5.png" }, { name: "Banner 6", src: "/digital_design_6.png" }] }
    ]
  },
  { 
    slug: "ghl-funnel-builder", 
    title: "GHL FUNNEL BUILDER", 
    category: "Marketing Automation Systems", 
    tag: "FUNNEL & CRM",
    image: "/GHL funnel Build.png", 
    subDesc: "High-converting GoHighLevel landing pages, SaaS sub-account setup, and triggers.",
    subCategories: [
      { id: 1, name: "LANDING PAGE", label: "Asset #1", cover: "/ghl_funnel_1.png", nestedImages: [{ name: "Page 1", src: "/ghl_funnel_1.png" }, { name: "Page 2", src: "/ghl_funnel_2.png" }, { name: "Page 3", src: "/ghl_funnel_3.png" }, { name: "Page 4", src: "/ghl_funnel_4.png" }, { name: "Page 5", src: "/ghl_funnel_5.png" }, { name: "Page 6", src: "/ghl_funnel_6.png" }] }
    ]
  },
];

export default function PortfolioGrid() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeSubId, setActiveSubId] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentProject = targetProjects.find(p => p.slug === activeSlug);
  const currentSub = currentProject?.subCategories?.find(s => s.id === activeSubId);

  const handleMainCardClick = (slug: string) => {
    if (activeSlug === slug) {
      setActiveSlug(null);
      setActiveSubId(null);
    } else {
      setActiveSlug(slug);
      setActiveSubId(null);
      setTimeout(() => {
        document.getElementById("vault-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleSubCardClick = (id: number) => {
    if (activeSubId === id) {
      setActiveSubId(null);
    } else {
      setActiveSubId(id);
      setTimeout(() => {
        document.getElementById("nested-images-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentSub && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentSub.nestedImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentSub && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentSub.nestedImages.length) % currentSub.nestedImages.length);
    }
  };

  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6 select-none relative" id="portfolio">
      
      {/* 🧠 হেডলাইন */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
          My Creative Workspace
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
          EXPLORE MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">EXPERT FIELDS</span>
        </h2>
      </div>

      {/* 🎴 মেইন ৪টি কার্ড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {targetProjects.map((project, index) => (
          <div 
            onClick={() => handleMainCardClick(project.slug)}
            key={index} 
            className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 block text-left ${
              activeSlug === project.slug ? 'bg-[#151522] border-brand-neon shadow-glow' : 'bg-[#12121A] border-white/5 hover:border-brand-neon/40 hover:shadow-glow'
            }`}
          >
            <span className="text-[10px] font-bold text-gray-500 tracking-widest block mb-4 uppercase">{project.tag}</span>
            <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg mb-5 flex items-center justify-center border border-white/5 relative overflow-hidden">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-70" />
            </div>
            <h3 className="text-white font-black text-lg tracking-wide uppercase">{project.title}</h3>
            <p className="text-xs text-brand-neon mt-0.5 uppercase tracking-wider font-semibold">{project.category}</p>
          </div>
        ))}
      </div>

      {/* 🔓 সেকশন ২: ৬টি ডেডিকেটেড লোগো প্রজেক্ট কার্ড */}
      <div id="vault-section" className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {activeSlug && currentProject && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto border-t border-white/10 pt-16">
              <div className="text-left mb-10">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">{currentProject.title} VAULT</h3>
                <p className="text-gray-400 text-sm mt-2 font-light max-w-3xl">{currentProject.subDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProject.subCategories.map((sub) => (
                  <div 
                    key={sub.id}
                    onClick={() => handleSubCardClick(sub.id)}
                    className={`group bg-[#12121A] border rounded-xl p-4 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-center relative overflow-hidden w-full aspect-[3/2] ${
                      activeSubId === sub.id ? 'border-brand-neon shadow-glow' : 'border-white/5 hover:border-brand-purple/40'
                    }`}
                  >
                    <img src={sub.cover} alt={sub.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-75 transition duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]/90 z-10 flex flex-col items-center justify-end pb-5">
                      <h4 className="text-white text-base font-black tracking-wider uppercase px-2 text-center drop-shadow-md">{sub.name}</h4>
                      <span className="text-[10px] text-brand-purple font-bold uppercase mt-0.5 tracking-widest">{sub.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔓 সেকশন ৩: সিলেক্ট করা ব্র্যান্ডের নির্দিষ্ট ৬টি গাইডলাইন ইমেজ গ্রিড + ডেসক্রিপশন এবং ওয়েবসাইট */}
      <div id="nested-images-section" className="scroll-mt-24 mt-16">
        <AnimatePresence mode="wait">
          {activeSubId && currentSub && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto border-t border-white/5 pt-12">
              
              {/* 📝 ডাইনামিক ডেসক্রিপশন ও লাইভ ওয়েবসাইট লিংক সেকশন */}
              <div className="bg-[#12121A] border border-white/5 p-6 rounded-xl mb-10 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                  <h4 className="text-xl font-black text-brand-neon uppercase tracking-wider">{currentSub.name} SYSTEM LABS</h4>
                  {currentSub.website && (
                    <a 
                      href={`https://${currentSub.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-brand-purple hover:text-brand-neon bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10 transition duration-200 uppercase tracking-widest inline-block w-fit"
                    >
                      🔗 {currentSub.website}
                    </a>
                  )}
                </div>
                {currentSub.description && (
                  <p className="text-gray-400 text-sm font-light leading-relaxed max-w-4xl">{currentSub.description}</p>
                )}
                <p className="text-gray-500 text-[11px] mt-4 font-light border-t border-white/5 pt-3">Click on any deliverable asset below to launch immersive lightbox preview.</p>
              </div>

              {/* গ্রিড ইমেজসমূহ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSub.nestedImages.map((imgObj, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group bg-[#161622] border border-white/5 hover:border-brand-neon/40 rounded-xl overflow-hidden cursor-pointer aspect-[4/3] relative shadow-lg"
                  >
                    <img src={imgObj.src} alt={imgObj.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-300 group-hover:scale-102" />
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 p-3 opacity-0 group-hover:opacity-100 transition duration-200 text-left z-10">
                      <p className="text-white font-bold text-xs uppercase tracking-wide">{imgObj.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔮 সেকশন ৪: প্রিমিয়াম স্টেডি গ্লোয়িং CTA বুকিং কল বাটন */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
          Ready to Elevate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">Your Brand Identity?</span>
        </h3>
        <p className="text-gray-400 text-xs md:text-sm font-light mt-2 max-w-lg leading-relaxed">
          Let’s discuss your design systems, high-retention visual assets, and marketing funnel automations.
        </p>
        
        <div className="mt-8">
          <a 
            href="#contact" // 👈 আপনার কন্টাক্ট ফর্ম আইডি অথবা এখানে Calendly লিংক বসাতে পারেন ভাই
            className="inline-flex items-center justify-center gap-2 bg-[#0B0B0F] border border-brand-neon text-white font-bold px-10 py-4 rounded-full transition duration-300 uppercase tracking-widest text-xs shadow-[0_0_15px_rgba(0,245,255,0.15)] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:bg-brand-neon hover:text-black"
          >
            Book a Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* 🖼️ ফুলস্ক্রিন প্রিমিয়াম লাইটবক্স স্লাইডার */}
      <AnimatePresence>
        {lightboxIndex !== null && currentSub && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)} className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4">
            <button className="absolute top-6 right-6 text-white/70 hover:text-white text-sm font-bold bg-white/5 px-4 py-2 rounded border border-white/10">CLOSE ×</button>
            <button onClick={prevImage} className="absolute left-4 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-purple z-30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <motion.div key={lightboxIndex} initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl max-h-[75vh] flex flex-col items-center">
              <img src={currentSub.nestedImages[lightboxIndex].src} alt="Preview" className="w-full h-full object-contain rounded-lg border border-white/10" />
            </motion.div>
            <button onClick={nextImage} className="absolute right-4 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-purple z-30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}