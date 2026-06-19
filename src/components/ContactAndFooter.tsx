"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 🎯 ইন্টারনাল এপিআই রুটে রিকোয়েস্ট পাঠানো হচ্ছে
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', details: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <footer className="w-full bg-[#07070A] border-t border-white/5 pt-20 pb-8 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-brand-purple tracking-tight mb-12">Start Your Project</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Your Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ankur Biswas" 
              className="w-full bg-[#12121A] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:outline-none focus:border-brand-neon transition" 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Your Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ankur@example.com" 
              className="w-full bg-[#12121A] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:outline-none focus:border-brand-neon transition" 
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Project Details</label>
            <textarea 
              rows={4} 
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Describe your design or GHL funnel automation project scope..." 
              className="w-full bg-[#12121A] border border-white/10 rounded-lg p-3.5 text-white text-sm focus:outline-none focus:border-brand-neon transition resize-none" 
            />
          </div>
          
          <div className="md:col-span-2 flex flex-col items-center mt-4 gap-4">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-brand-neon hover:bg-brand-purple disabled:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition shadow-glow uppercase"
            >
              {status === 'loading' ? 'Sending Message...' : 'Book a Discovery Call'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm font-medium tracking-wide">✓ Success! Thank you for your message.Contact within 24 hours.</p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-sm font-medium tracking-wide">✕ Error! Failed to connect . Please try again.</p>
            )}
          </div>
        </form>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-xs font-semibold tracking-wider text-gray-400 uppercase mb-10">
        <Link href="/" className="hover:text-brand-neon transition">Home</Link>
        <Link href="#services" className="hover:text-brand-neon transition">Services</Link>
        <Link href="#portfolio" className="hover:text-brand-neon transition">Portfolio</Link>
        <Link href="#contact" className="hover:text-brand-neon transition">Contact</Link>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-xs text-gray-500">
        <p>© 2026 AnkurBiswas. All rights reserved. | Based in Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}