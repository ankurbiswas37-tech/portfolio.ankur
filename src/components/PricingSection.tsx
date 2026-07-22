'use client';

import { useState } from 'react';
import { packagesData, PackageItem } from '@/data/packagesData';
import PricingModals from './PricingModals';

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Service Packages & Pricing
        </h2>
        <p className="text-zinc-400 text-sm md:text-base">
          Choose a fixed package or request a custom proposal for single assets.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
              pkg.popular 
                ? 'bg-zinc-900/90 border-purple-500/50 shadow-lg shadow-purple-500/10' 
                : 'bg-zinc-950 border-white/10 hover:border-white/20'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 right-6 bg-purple-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
              
              {pkg.price ? (
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-xs text-zinc-400">{pkg.period}</span>
                </div>
              ) : (
                <div className="mb-4">
                  <span className="text-lg font-semibold text-purple-400">Custom Quote</span>
                </div>
              )}

              <p className="text-xs text-zinc-400 mb-6">{pkg.description}</p>

              <ul className="space-y-2 mb-8">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-zinc-300 flex items-center gap-2">
                    <span className="text-purple-400">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedPackage(pkg)}
              className={`w-full py-3 rounded-xl font-medium text-sm transition ${
                pkg.type === 'custom'
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10'
                  : 'bg-white hover:bg-zinc-200 text-black font-semibold'
              }`}
            >
              {pkg.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Modals Integration */}
      <PricingModals 
        selectedPackage={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />
    </section>
  );
}