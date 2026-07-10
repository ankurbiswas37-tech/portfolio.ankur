"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from 'next-sanity';

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
  videoType: 'none' | 'url' | 'file';
  videoUrl?: string;
  videoFileUrl?: string;
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
  
  // ভিডিও প্লেব্যাক স্টেটস
  const [activeVideoSource, setActiveVideoSource] = useState<{ type: 'url' | 'file'; src: string } | null>(null);
  
  const [portfolioData, setPortfolioData] = useState<MainProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const projectQuery = `*[_type == "portfolioProject"]{
          _id,
          title,
          mainCategory,
          label,
          "cover": cover.asset->url,
          videoType,
          videoUrl,
          "videoFileUrl": videoFile.asset->url,
          nestedImages[]{
            "name": name,
            "src": asset->url
          }
        }`;
        
        const categoryQuery = `*[_type == "categoryConfig"]{
          slug,
          "customCover": coverImage.asset->url
        }`;

        const rawData = await client.fetch(projectQuery).catch(() => []);
        const customCategories = await client.fetch(categoryQuery).catch(() => []);

        const formattedData = mainSectionsConfig.map(section => {
          const matchedSubs = (rawData || [])
            .filter((item: any) => item && item.mainCategory === section.slug)
            .map((item: any) => ({
              id: item._id,
              name: item.title,
              label: item.label || "Asset Component",
              cover: item.cover || section.image,
              videoType: item.videoType || 'none',
              videoUrl: item.videoUrl || "",
              videoFileUrl: item.videoFileUrl || "",
              nestedImages: item.nestedImages || []
            }));

          const customCoverObj = (customCategories || []).find((cat: any) => cat && cat.slug === section.slug);
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
        const fallbackData = mainSectionsConfig.map(section => ({ ...section, subCategories: [] }));
        setPortfolioData(fallbackData);
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const currentProject = portfolioData.find(p => p.slug === activeSlug);

  // ইউটিউব লিংক পার্স করার হেল্পার
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('/').pop();
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6 select-none relative" id="portfolio">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">Live Studio Vault</span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
          EXPLORE MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">EXPERT FIELDS</span>
        </h2>
      </div>

      {/* 🎴 ওপরে থাকা মেইন ৪টি বড় সেকশন কার্ড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {portfolioData.map((project, index) => {
          const isSelected = activeSlug === project.slug;
          return (
            <div 
              onClick={() => {
                setActiveSlug(isSelected ? null : project.slug);
                setActiveSubId(null);
                if (!isSelected) {
                  setTimeout(() => {
                    document.getElementById('vault-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 250); 
                }
              }}
              key={index} 
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-300 block text-left ${
                isSelected ? 'bg-[#151522] border-brand-neon shadow-glow' : 'bg-[#12121A] border-white/5 hover:border-brand-neon/40'
              }`}
            >
              <span className="text-[10px] font-bold text-gray-500 tracking-widest block mb-4 uppercase">{project.tag}</span>
              <div className="w-full aspect-[4/3] bg-[#0B0B0F] rounded-lg mb-5 flex items-center justify-center border border-white/5 relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105" />
              </div>
              <h3 className="text-white font-black text-lg tracking-wide uppercase">{project.title}</h3>
              <p className="text-xs text-brand-neon mt-0.5 uppercase tracking-wider font-semibold">{project.category}</p>
            </div>
          );
        })}
      </div>

      {/* 🔓 সেকশন ২: সাব-কার্ড গ্রিড */}
      <div id="vault-section" className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {activeSlug && currentProject && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto border-t border-white/10 pt-16">
              <div className="text-left mb-10">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">{currentProject.title} VAULT</h3>
                <p className="text-gray-400 text-sm mt-2 font-light max-w-3xl">{currentProject.subDesc}</p>
              </div>

              {currentProject.subCategories.length === 0 ? (
                <div className="text-left py-10 border border-dashed border-white/10 rounded-xl px-6 bg-[#12121A]">
                  <p className="text-gray-500 text-sm">No items uploaded under this category yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProject.subCategories.map((sub) => (
                    <div 
                      key={sub.id}
                      onClick={() => {
                        if (sub.videoType === 'url' && sub.videoUrl) {
                          setActiveVideoSource({ type: 'url', src: sub.videoUrl });
                        } else if (sub.videoType === 'file' && sub.videoFileUrl) {
                          setActiveVideoSource({ type: 'file', src: sub.videoFileUrl });
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
                          {sub.videoType !== 'none' ? "🎬 WATCH VIDEO" : sub.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔓 সেকশন ৩: ইমেজ গ্যালারি (যদি ভিডিও না হয়ে সাধারণ ইমেজ প্রজেক্ট হয়) */}
      <div className="mt-16">
        <AnimatePresence mode="wait">
          {activeSubId && currentProject && (
            (() => {
              const currentSub = currentProject.subCategories.find(s => s.id === activeSubId);
              if (!currentSub || !currentSub.nestedImages || currentSub.nestedImages.length === 0) return null;
              
              return (
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
              );
            })()
          )}
        </AnimatePresence>
      </div>

      {/* 🎬 ডাইনামিক লাইটবক্স ও ভিডিও মোডাল প্লেয়ার */}
      <AnimatePresence>
        {lightboxIndex !== null && activeSlug && (
          (() => {
            const currentSub = portfolioData.find(p => p.slug === activeSlug)?.subCategories.find(s => s.id === activeSubId);
            if (!currentSub || !currentSub.nestedImages[lightboxIndex]) return null;
            return (
              <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
                <img src={currentSub.nestedImages[lightboxIndex].src} alt="Preview" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
              </div>
            );
          })()
        )}
        
        {activeVideoSource && (
          <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 animate-fadeIn" onClick={() => setActiveVideoSource(null)}>
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10 bg-black relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideoSource(null)} className="absolute top-4 right-4 text-white text-xl bg-black/50 p-2 rounded-full z-50 hover:bg-white/20">✕</button>
              
              {activeVideoSource.type === 'url' ? (
                <iframe src={getEmbedUrl(activeVideoSource.src)} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen></iframe>
              ) : (
                <video src={activeVideoSource.src} className="w-full h-full" controls autoPlay playsInline></video>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}