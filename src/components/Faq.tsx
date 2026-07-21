"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What services do you specialize in?",
    answer: "I specialize in high-end Brand Identity systems, Video Editing & Motion Graphics, Social Media & Digital Assets, and complete GoHighLevel (GHL) Sales Funnels & Automation setup."
  },
  {
    question: "What is your typical turnaround time for a project?",
    answer: "Turnaround depends on the scope of work. Video editing projects usually take 24–48 hours, while complete Brand Identity packages or GHL Funnel builds take around 3 to 7 business days."
  },
  {
    question: "How do we get started on a new project?",
    answer: "Simply fill out the 'Start Your Project' form below with your project details or book a direct strategy call. I'll reach out within a few hours to discuss scope, timeline, and pricing."
  },
  {
    question: "Do you offer revisions if I need changes?",
    answer: "Yes, absolutely! I offer unlimited minor revisions during the project feedback phase to ensure the final output aligns 100% with your brand vision."
  },
  {
    question: "Can you handle full GoHighLevel automation and funnel builds?",
    answer: "Yes, from landing page UI/UX design to CRM triggers, lead capture forms, email sequences, and SaaS sub-account setup, I handle the complete GHL architecture."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // প্রথম প্রশ্নটি ডিফল্টভাবে খোলা থাকবে

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#0B0B0F] px-6 select-none relative border-t border-white/5" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* 🎯 হেডার সেকশন */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 font-light">
            Everything you need to know about my workflow, deliverables, and project collaboration.
          </p>
        </div>

        {/* ❓ FAQ অ্যাকর্ডিয়ন লিস্ট */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#12121A] border-brand-neon/40 shadow-glow' 
                    : 'bg-[#12121A]/60 border-white/5 hover:border-brand-purple/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-white text-base md:text-lg font-bold tracking-wide">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-sm transition-transform duration-300 ${
                    isOpen ? 'bg-brand-neon text-black border-brand-neon rotate-180' : 'bg-[#0B0B0F] text-white border-white/10'
                  }`}>
                    ↓
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4 font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}