"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
}

// 🌟 ডিফল্ট ব্যাকআপ রিভিউসমূহ (লাইভ ক্লায়েন্ট প্রুফের জন্য)
const defaultReviews: Review[] = [
  {
    id: "1",
    name: "Alex Vance",
    role: "Founder, Nova Labs",
    rating: 5,
    comment: "Ankur delivered our complete brand identity and guidelines flawlessly. Exceptional precision in design and motion!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "Marketing Director, Apex Agency",
    rating: 5,
    comment: "The high-retention video edits created for our social ads boosted our conversion rates by 40%. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Michael Chang",
    role: "CEO, StreamFlow SaaS",
    rating: 5,
    comment: "Outstanding GoHighLevel funnel setup and clean UI designs. He handled our entire workflow automation seamlessly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    name: "David Miller",
    role: "E-commerce Owner",
    rating: 5,
    comment: "Super creative thumbnails and motion graphic ads. Ankur knows exactly how to hook viewers in the first 3 seconds!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // ক্লায়েন্ট রিভিউ ফর্ম স্টেট
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formComment, setFormComment] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // ⏱️ ৩ সেকেন্ড পর পর অটো-স্লাইড লজিক
  useEffect(() => {
    if (isHovered || isModalOpen) return; // মাউস ওপরে থাকলে বা ফর্ম ওপেন থাকলে পজ হবে
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isModalOpen, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // 📝 নতুন রিভিউ সাবমিট হ্যান্ডলার
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formComment) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: formName,
      role: formRole || "Client",
      rating: formRating,
      comment: formComment,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formName)}`
    };

    setReviews([newReview, ...reviews]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setFormName("");
      setFormRole("");
      setFormComment("");
      setFormRating(5);
    }, 1500);
  };

  // ৩টি করে কার্ড একসাথে রেন্ডার করার হেল্পার
  const visibleReviews = [
    reviews[currentIndex % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section 
      className="w-full py-20 bg-[#0B0B0F] px-6 select-none relative overflow-hidden border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 🎯 হেডার সেকশন */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mt-2">
              WHAT CLIENTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">SAY ABOUT ME</span>
            </h2>
          </div>

          {/* 🔘 রিভিউ দিন বাটন ও নেভিগেশন অ্যারো */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-neon text-white text-xs font-bold tracking-wider uppercase hover:opacity-90 transition shadow-glow flex items-center gap-2"
            >
              ✍️ WRITE A REVIEW
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-[#12121A] border border-white/10 hover:border-brand-neon text-white flex items-center justify-center transition hover:scale-105"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-[#12121A] border border-white/10 hover:border-brand-neon text-white flex items-center justify-center transition hover:scale-105"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 🎴 ৩টি কার্ড সম্বলিত স্লাইডার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[220px]">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-[#12121A] border border-white/5 hover:border-brand-purple/40 rounded-2xl p-6 flex flex-col justify-between relative group hover:shadow-glow transition-all duration-300"
              >
                <div>
                  {/* ⭐ ৫-স্টার রেটিং */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>

                  {/* 💬 রিভিউ কমেন্ট */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic mb-6">
                    "{item.comment}"
                  </p>
                </div>

                {/* 👤 ক্লায়েন্ট ইনফো */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  {item.avatar && (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-brand-purple/50"
                    />
                  )}
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide uppercase">{item.name}</h4>
                    <p className="text-xs text-brand-neon font-medium">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ✍️ ক্লায়েন্ট রিভিউ দেওয়ার পপ-আপ মোডাল (Modal Form) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#12121A] border border-brand-neon/30 rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                LEAVE A <span className="text-brand-neon">REVIEW</span>
              </h3>
              <p className="text-xs text-gray-400 mb-6">Your feedback helps me deliver even higher quality work!</p>

              {submitSuccess ? (
                <div className="py-8 text-center bg-brand-purple/10 border border-brand-purple rounded-xl">
                  <span className="text-3xl block mb-2">🎉</span>
                  <p className="text-white font-bold">Thank You! Your review has been added.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-left">
                  <div>
                    <label className="text-xs text-gray-300 uppercase font-bold block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-brand-neon outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 uppercase font-bold block mb-1">Role / Company Name</label>
                    <input
                      type="text"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder="e.g. Founder at TechX"
                      className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-brand-neon outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 uppercase font-bold block mb-1">Rating</label>
                    <div className="flex gap-2 text-xl cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => setFormRating(star)}
                          className={star <= formRating ? "text-amber-400" : "text-gray-600"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 uppercase font-bold block mb-1">Review *</label>
                    <textarea
                      required
                      rows={3}
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      placeholder="Write your project experience..."
                      className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-brand-neon outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-neon text-white font-bold text-sm uppercase rounded-xl hover:opacity-90 transition shadow-glow mt-2"
                  >
                    SUBMIT REVIEW
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}