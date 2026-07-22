'use client';

import { useState } from 'react';
import { PackageItem } from '@/data/packagesData';

interface ModalProps {
  selectedPackage: PackageItem | null;
  onClose: () => void;
}

export default function PricingModals({ selectedPackage, onClose }: ModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  if (!selectedPackage) return null;

  // Existing /api/send-message Handler
  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[Package Proposal Request: ${selectedPackage.title}]\n\nDetails: ${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus('Proposal sent successfully!');
        setTimeout(() => {
          onClose();
          setStatus('');
        }, 2000);
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-900 border border-white/10 p-6 text-white shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          ✕
        </button>

        {/* 1. CHECKOUT MODAL (For Fixed Packages) */}
        {selectedPackage.type === 'fixed' ? (
          <div>
            <h3 className="text-xl font-bold mb-1">Checkout: {selectedPackage.title}</h3>
            <p className="text-2xl font-extrabold text-purple-400 mb-6">
              {selectedPackage.price} <span className="text-sm font-normal text-zinc-400">{selectedPackage.period}</span>
            </p>

            <p className="text-xs text-zinc-300 mb-3">Select your payment method to proceed:</p>
            
            {/* Payment Options */}
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-zinc-800 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="font-medium text-sm">Payoneer / Wise / Bank</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">International</span>
              </div>
              <div className="p-3 bg-zinc-800 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="font-medium text-sm">Crypto (USDT / BTC)</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Binance Pay</span>
              </div>
              <div className="p-3 bg-zinc-800 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="font-medium text-sm">bKash / Nagad / Rocket</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Local Pay</span>
              </div>
            </div>

            <a
              href="#contact" 
              onClick={onClose}
              className="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-center font-semibold rounded-xl text-sm transition"
            >
              Contact to Complete Order
            </a>
          </div>
        ) : (
          /* 2. PROPOSAL MODAL (For Custom / Single Assets) */
          <div>
            <h3 className="text-xl font-bold mb-1">Send Project Proposal</h3>
            <p className="text-xs text-zinc-400 mb-4">Tell me about your single asset or custom requirements.</p>

            <form onSubmit={handleSubmitProposal} className="space-y-3">
              <div>
                <label className="text-xs font-medium text-zinc-300">Your Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full mt-1 p-2.5 rounded-lg bg-zinc-800 border border-white/10 text-sm focus:outline-none focus:border-purple-500"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300">Your Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full mt-1 p-2.5 rounded-lg bg-zinc-800 border border-white/10 text-sm focus:outline-none focus:border-purple-500"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300">Project Details & Budget</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="e.g. Need 1 Thumbnail design or 1 Video edit..."
                  className="w-full mt-1 p-2.5 rounded-lg bg-zinc-800 border border-white/10 text-sm focus:outline-none focus:border-purple-500"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 font-semibold rounded-xl text-sm transition"
              >
                Submit Proposal
              </button>

              {status && <p className="text-xs text-center text-purple-400 mt-2">{status}</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}