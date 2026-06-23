"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from 'next-sanity';

// 🎯 Sanity Client Configuration
const client = createClient({
  projectId: '3z1uy8z4',
  dataset: 'production',
  apiVersion: '2026-03-10',
  useCdn: false,
});

interface NestedImage {
  name: string;
  src: string;
}

interface SubCategory {
  id: string;
  name: string;
  label: string;
  cover: string;
  website?: string;
  videoUrl?: string;
  description?: string;
  nestedImages: NestedImage[];
}

interface MainProject {
  slug: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  subDesc: string;
  subCategories: SubCategory[];
}

// 🗂️ ৪টি প্রধান বিভাগের ডিফল্ট ব্যাকআপ কন্টেন্ট
const mainSectionsConfig = [
  { slug: "brand-identity", title: "BRAND IDENTITY", category: "Visual Systems & Strategy", tag: "BRANDING", image: "/brand identity.png", subDesc: "Premium corporate branding suites, visual identity systems, and brand guidelines crafted across commercial industries." },
  { slug: "video-editing", title: "VIDEO EDITING", category: "Ads & High-Retention Cuts", tag: "VIDEO EDITING", image: "/video editing.png", subDesc: "Engaging commercial ads and high-retention social content built with precision." },
  { slug: "digital-design", title: "DIGITAL DESIGN", category: "Social Assets & UI Artifacts", tag: "DIGITAL DESIGN", image: "/digital design.png", subDesc: "High-end social media assets, marketing web pages, and custom digital assets." },
  { slug: "ghl-funnel-builder", title: "GHL FUNNEL BUILDER", category: "Marketing Automation Systems", tag: "FUNNEL & CRM", image: "/GHL funnel Build.png", subDesc: "High-converting GoHighLevel landing pages, SaaS sub-account setup, and triggers." }
];

export default function PortfolioGrid() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeSubId, setActiveSubId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoPlayUrl, setVideoPlayUrl] = useState<string | null>(null);
  const [portfolioData, setPortfolioData] = useState<MainProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        // 🔍 ১. প্রজেক্ট এবং কাস্টম ক্যাটাগরি কভার দুটোই একসাথে নিয়ে আসার কুয়েরি
        const projectQuery = `*[_type == "portfolioProject"]{
          _id,
          title,
          mainCategory,
          label,
          "cover": cover.asset->url,
          website,
          videoUrl,
          description,
          nestedImages[]{
            "name": name,
            "src": asset->url
          }
        }`;
        
        const categoryQuery = `*[_type == "categoryConfig"]{
          slug,
          "customCover": coverImage.asset->url
        }`;

        // একসাথে প্যারালাল ডাটা ফেচিং
        const [rawData, customCategories] = await Promise.all([
          client.fetch(projectQuery),
          client.fetch(categoryQuery)
        ]);

        // 🧠 ২. সানিটির ডাটাকে মেইন ক্যাটাগরির সাথে নিখুঁতভাবে ম্যাপিং
        const formattedData = mainSectionsConfig.map(section => {
          const matchedSubs = rawData
            .filter((item: any) => item.mainCategory === section.slug)
            .map((item: any) => ({
              id: item._id,
              name: item.title,
              label: item.label || "Asset Component",
              cover: item.cover,
              website: item.website || "",
              videoUrl: item.videoUrl || "",
              description: item.description || "",
              nestedImages: item.nestedImages || []
            }));

          // কাস্টম ক্যাটাগরি কভার চেক করা -> না থাকলে প্রথম প্রজেক্টের ইমেজ -> না থাকলে লোকাল ডিফল্ট ইমেজ
          const customCoverObj = customCategories.find((cat: any) => cat.slug === section.slug);
          const finalCoverImage = customCoverObj?.customCover || (matchedSubs.length > 0 ? matchedSubs[0].cover : section.image);

          return {
            ...section,
            image: finalCoverImage,
            subCategories: matchedSubs
          };
        });

        setPortfolioData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const currentProject = portfolioData.find(p => p.slug === activeSlug);
  const currentSub = currentProject?.subCategories?.find(s => s.id === activeSubId);

  if (loading) {
    return (
      <div className="w-full py-32 bg-[#0B0B0F] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-neon border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6 select-none relative" id="portfolio">
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
          Live Studio Vault
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
          EXPLORE MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">EXPERT FIELDS</span>
        </h2>
      </div>

      {/* 🎴 ওপরে থাকা মেইন ৪টি বড় সেকশন কার্ড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {portfolioData.map((project, index) => (
          <div 
            onClick={() => {
              setActiveSlug(activeSlug === project.slug ? null : project.slug);
              setActiveSubId(null);
            }}
            key={index} 
            className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 block text-left ${
              activeSlug === project.slug ? 'bg-[#151522] border-brand-neon shadow-glow' : 'bg-[#12121A] border-white/5 hover:border-brand-neon/40'
            }`}
          >
            <span className="text-[10px] font-bold text-gray-500 tracking-widest block mb-4 uppercase">{project.tag}</span>
            <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg mb-5 flex items-center justify-center border border-white/5 relative overflow-hidden">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105" />
            </div>
            <h3 className="text-white font-black text-lg tracking-wide uppercase">{project.title}</h3>
            <p className="text-xs text-brand-neon mt-0.5 uppercase tracking-wider font-semibold">{project.category}</p>
          </div>
        ))}
      </div>

      {/* 🔓 সেকশন ২: ডাইনামিক সাব-কার্ড গ্রিড */}
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
                    onClick={() => {
                      if (sub.videoUrl) {
                        setVideoPlayUrl(sub.videoUrl);
                      } else {
                        setActiveSubId(activeSubId === sub.id ? null : sub.id);
                      }
                    }}
                    className={`group bg-[#12121A] border rounded-xl p-4 transition duration-300 cursor-pointer text-center flex flex-col items-center justify-center relative overflow-hidden w-full aspect-[3/2] ${
                      activeSubId === sub.id ? 'border-brand-neon shadow-glow' : 'border-white/5 hover:border-brand-purple/40'
                    }`}
                  >
                    <img src={sub.cover} alt={sub.name} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]/90 z-10 flex flex-col items-center justify-end pb-5">
                      <h4 className="text-white text-base font-black tracking-wider uppercase px-2 text-center drop-shadow-md">{sub.name}</h4>
                      <span className="text-[10px] text-brand-purple font-bold uppercase mt-0.5 tracking-widest">
                        {sub.videoUrl ? "🎬 WATCH VIDEO" : sub.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔓 সেকশন ৩: সাব-কার্ডের ভেতরের ইমেজ গ্যালারি */}
      <div className="mt-16">
        <AnimatePresence mode="wait">
          {activeSubId && currentSub && currentSub.nestedImages.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto border-t border-white/5 pt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSub.nestedImages.map((imgObj, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group bg-[#161622] border border-white/5 hover:border-brand-neon/40 rounded-xl overflow-hidden cursor-pointer aspect-[4/3] relative shadow-lg"
                  >
                    <img src={imgObj.src} alt={imgObj.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox & Video Modals */}
      <AnimatePresence>
        {lightboxIndex !== null && currentSub && (
          <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
            <img src={currentSub.nestedImages[lightboxIndex].src} alt="Preview" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </div>
        )}
        {videoPlayUrl && (
          <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4" onClick={() => setVideoPlayUrl(null)}>
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              <iframe src={videoPlayUrl.includes('youtube.com') ? videoPlayUrl.replace('watch?v=', 'embed/') : videoPlayUrl} className="w-full h-full" allow="autoplay; fullscreen"></iframe>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}