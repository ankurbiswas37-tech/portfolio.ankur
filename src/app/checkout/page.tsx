'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
// ১. ঠিক করা হয়েছে: packagesData ফাইল ইম্পোর্ট
import { packagesData, PackageItem, ServiceItem } from '@/data/packagesData';

interface PaymentSubOption {
  label: string;
  info: string;
  type: 'trx' | 'bank_info';
}

interface PaymentCategoryConfig {
  [key: string]: PaymentSubOption;
}

interface PaymentDetailsConfig {
  international: PaymentCategoryConfig;
  crypto: PaymentCategoryConfig;
  local: PaymentCategoryConfig;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get('package') || 'visual-brand';
  
  // ২. ঠিক করা হয়েছে: 'p' এর টাইপ (p: PackageItem) নির্দিষ্ট করা হয়েছে
  const currentPackage: PackageItem = 
    packagesData.find((p: PackageItem) => p.id === packageId) || packagesData[0];

  const paymentDetailsConfig: PaymentDetailsConfig = {
    international: {
      payoneer: {
        label: "Payoneer",
        info: "<strong>Payoneer Email:</strong> ankurbiswas37@gmail.com<br><strong>Account Holder:</strong> Ankur Biswas",
        type: "trx"
      },
      wise: {
        label: "Wise",
        info: "<strong>Wise ID/Email:</strong> ankurbiswas37@gmail.com<br><strong>Account Holder:</strong> Ankur Biswas",
        type: "trx"
      },
      bank: {
        label: "Direct Bank Transfer",
        info: "<strong>Bank Name:</strong> Bank Asia PLC.<br><strong>Account Name:</strong> Ankur Biswas<br><strong>Account No:</strong> 1083455033660<br><strong>SWIFT Code:</strong> CIBLBDDH",
        type: "bank_info"
      }
    },
    crypto: {
      binance: {
        label: "Binance Pay / USDT",
        info: "<strong>Binance Pay ID:</strong> 987654321<br><strong>USDT (BEP20):</strong> 0x1815a933ed7cd75f6e15e0490cfecff37d8fb8b7",
        type: "trx"
      }
    },
    local: {
      bkash: {
        label: "bKash / Nagad / Rocket",
        info: "<strong>bKash Personal:</strong> 01761210026<br><strong>Nagad Personal:</strong> 01761210026<br><strong>Rocket Personal:</strong> 01761210026",
        type: "trx"
      }
    }
  };

  const [activeMainCategory, setActiveMainCategory] = useState<'international' | 'crypto' | 'local'>('international');
  const [activeSubGateway, setActiveSubGateway] = useState<string>('payoneer');

  const handleMainCategoryChange = (category: 'international' | 'crypto' | 'local') => {
    setActiveMainCategory(category);
    const firstSubKey = Object.keys(paymentDetailsConfig[category])[0];
    setActiveSubGateway(firstSubKey);
  };

  const currentSelectedData = paymentDetailsConfig[activeMainCategory][activeSubGateway];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment info submitted successfully!');
  };

  return (
    <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Checkout: {currentPackage.title}</h2>
          <div className="text-3xl font-extrabold text-purple-400 mt-1">
            {currentPackage.price || 'Custom'}{' '}
            <span className="text-sm font-normal text-gray-400">
              {currentPackage.period || ''}
            </span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white text-xl">&times;</button>
      </div>

      {/* 1. Main Category Selector */}
      <div className="space-y-3 mb-6">
        <label className="block text-sm font-medium text-gray-300">Select Main Payment Category:</label>

        <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
          activeMainCategory === 'international' ? 'border-purple-500 bg-purple-900/20' : 'border-slate-800 bg-slate-800/40 hover:border-purple-500/50'
        }`}>
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="main_method" 
              checked={activeMainCategory === 'international'} 
              onChange={() => handleMainCategoryChange('international')} 
              className="accent-purple-500 w-4 h-4"
            />
            <span className="font-medium">Payoneer / Wise / Bank</span>
          </div>
          <span className="text-xs bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-md">International</span>
        </label>

        <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
          activeMainCategory === 'crypto' ? 'border-amber-500 bg-amber-900/20' : 'border-slate-800 bg-slate-800/40 hover:border-amber-500/50'
        }`}>
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="main_method" 
              checked={activeMainCategory === 'crypto'} 
              onChange={() => handleMainCategoryChange('crypto')} 
              className="accent-amber-500 w-4 h-4"
            />
            <span className="font-medium">Crypto (USDT / BTC)</span>
          </div>
          <span className="text-xs bg-amber-900/30 text-amber-400 px-2.5 py-1 rounded-md">Binance Pay</span>
        </label>

        <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
          activeMainCategory === 'local' ? 'border-emerald-500 bg-emerald-900/20' : 'border-slate-800 bg-slate-800/40 hover:border-emerald-500/50'
        }`}>
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="main_method" 
              checked={activeMainCategory === 'local'} 
              onChange={() => handleMainCategoryChange('local')} 
              className="accent-emerald-500 w-4 h-4"
            />
            <span className="font-medium">bKash / Nagad / Rocket</span>
          </div>
          <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2.5 py-1 rounded-md">Local Pay</span>
        </label>
      </div>

      {/* 2. Order Summary */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 border-b border-slate-800 pb-2">Order Summary</h3>
        <div className="space-y-2 text-sm text-gray-400">
          {currentPackage.services && currentPackage.services.length > 0 ? (
            // ৩ & ৪. ঠিক করা হয়েছে: (item: ServiceItem, index: number) টাইপ সেট করা হয়েছে
            currentPackage.services.map((item: ServiceItem, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span className="font-medium text-gray-200">${item.price.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500 italic">Custom proposal or single asset request</div>
          )}
        </div>
        <div className="border-t border-slate-800 mt-3 pt-3 flex justify-between items-center font-bold text-emerald-400">
          <span>Total Payable Amount</span>
          <span className="text-base">{currentPackage.totalUSD || 'Custom Quote'}</span>
        </div>
      </div>

      {/* 3. Sub-Payment Options & Details */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">Payment Method Details</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(paymentDetailsConfig[activeMainCategory]).map((key) => {
            const option = paymentDetailsConfig[activeMainCategory][key];
            const isActive = key === activeSubGateway;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveSubGateway(key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  isActive 
                    ? 'bg-purple-600 border-purple-500 text-white' 
                    : 'bg-slate-800 border-slate-700 text-gray-400 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div 
          className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 text-sm space-y-1.5 text-gray-300"
          dangerouslySetInnerHTML={{ __html: currentSelectedData?.info || '' }}
        />
      </div>

      {/* 4. Form Fields */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          {currentSelectedData?.type === 'bank_info' ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Sender Bank Account Number</label>
                <input type="text" required placeholder="e.g. 98765432101" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Sender Account Holder Name</label>
                <input type="text" required placeholder="e.g. John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Enter Transaction ID (TrxID)</label>
              <input type="text" required placeholder="e.g. TRX10293847" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" />
            </div>
          )}
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-200">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="bg-gray-950 text-white flex items-center justify-center min-h-screen p-4">
      <Suspense fallback={<div className="text-gray-400">Loading Checkout...</div>}>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}