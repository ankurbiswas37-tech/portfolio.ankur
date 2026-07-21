"use client";

import React, { useState } from 'react';

const paymentMethods = [
  { name: "Payoneer", icon: "🌐" },
  { name: "Wise", icon: "🚀" },
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "Bank Transfer", icon: "🏦" },
  { name: "nsave", icon: "🛡️" },
  { name: "Crypto", icon: "₿" },
  { name: "bKash", icon: "📱" },
  { name: "Nagad", icon: "📱" },
  { name: "Rocket", icon: "🚀" },
  { name: "Upay", icon: "📲" },
];

export default function ContactAndFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <footer className="w-full bg-[#0B0B0F] pt-20 pb-10 px-6 border-t border-white/5 relative select-none" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 🎯 "Start Your Project" Form Section */}
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon uppercase tracking-tight mb-12">
          Start Your Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-2">
                YOUR NAME
              </label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="type your name"
                className="w-full bg-[#12121A] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none transition"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-2">
                YOUR EMAIL
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="type your email"
                className="w-full bg-[#12121A] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-2">
              PROJECT DETAILS
            </label>
            <textarea 
              rows={4}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe your design,video project or GHL funnel automation project scope..."
              className="w-full bg-[#12121A] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-brand-neon focus:ring-1 focus:ring-brand-neon outline-none transition resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <button 
              type="submit"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-neon text-white font-bold text-sm tracking-wider uppercase shadow-glow hover:opacity-90 transition duration-300 transform hover:scale-105"
            >
              BOOK A DISCOVERY CALL
            </button>
          </div>
        </form>

        {/* 🔗 Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest mb-16">
          <a href="#hero" className="hover:text-brand-neon transition">HOME</a>
          <a href="#services" className="hover:text-brand-neon transition">SERVICES</a>
          <a href="#portfolio" className="hover:text-brand-neon transition">PORTFOLIO</a>
          <a href="#contact" className="hover:text-brand-neon transition">CONTACT</a>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-12"></div>

        {/* 💳 💳 ACCEPTED PAYMENT METHODS SECTION 💳 💳 */}
        <div className="mb-8">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block mb-4">
            Accepted Payment Methods
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {paymentMethods.map((pm, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#12121A] border border-white/10 text-gray-300 text-xs font-medium hover:border-brand-neon/50 hover:text-white transition duration-200 cursor-default"
              >
                <span>{pm.icon}</span>
                <span>{pm.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 📄 COPYRIGHT & FOOTER TEXT */}
        <p className="text-xs text-gray-500 font-light tracking-wide">
          © 2026 AnkurBiswas. All rights reserved. | Based in Dhaka, Bangladesh
        </p>

      </div>
    </footer>
  );
}