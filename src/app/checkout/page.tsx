'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import jsPDF from 'jspdf';
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

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form input states for Invoice
  const [trxId, setTrxId] = useState<string>('');
  const [senderAccount, setSenderAccount] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');

  const handleMainCategoryChange = (category: 'international' | 'crypto' | 'local') => {
    setActiveMainCategory(category);
    const firstSubKey = Object.keys(paymentDetailsConfig[category])[0];
    setActiveSubGateway(firstSubKey);
  };

  const currentSelectedData = paymentDetailsConfig[activeMainCategory][activeSubGateway];

  // Dynamic PDF Invoice Generator Function
  const generatePDFInvoice = (orderId?: string) => {
    const doc = new jsPDF();

    // 1. Header & Brand Title
    doc.setFontSize(22);
    doc.setTextColor(168, 85, 247); // Accent purple
    doc.text("CREATIVE EDGE", 14, 20);

    doc.setFontSize(9);
    doc.setTextColor(130);
    doc.text("Visual Assets, Video & Funnel Architecture", 14, 26);

    // Invoice Meta
    const dateStr = new Date().toLocaleDateString();
    const invoiceNo = orderId || `INV-${Math.floor(100000 + Math.random() * 900000)}`;
    doc.setFontSize(10);
    doc.setTextColor(80);
    doc.text(`Date: ${dateStr}`, 150, 20);
    doc.text(`Invoice No: #${invoiceNo}`, 150, 26);

    doc.setDrawColor(200);
    doc.line(14, 32, 196, 32);

    // 2. Payment & Client Info
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text("Payment Details", 14, 42);

    doc.setFontSize(10);
    doc.setTextColor(80);
    doc.text(`Category: ${activeMainCategory.toUpperCase()}`, 14, 49);
    doc.text(`Method: ${currentSelectedData?.label}`, 14, 55);

    if (currentSelectedData?.type === 'bank_info') {
      doc.text(`Sender Account: ${senderAccount || 'N/A'}`, 14, 61);
      doc.text(`Account Name: ${senderName || 'N/A'}`, 14, 67);
    } else {
      doc.text(`Transaction ID (TrxID): ${trxId || 'N/A'}`, 14, 61);
    }

    doc.line(14, 73, 196, 73);

    // 3. Package & Services Order Summary
    doc.setFontSize(12);
    doc.setTextColor(168, 85, 247);
    doc.text(`Package: ${currentPackage.title}`, 14, 83);

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text("Order Breakdown:", 14, 93);

    let startY = 101;

    if (currentPackage.services && currentPackage.services.length > 0) {
      currentPackage.services.forEach((service: ServiceItem) => {
        doc.setFontSize(9.5);
        doc.setTextColor(70);
        doc.text(`• ${service.name}`, 18, startY);
        doc.text(`$${service.price.toFixed(2)}`, 180, startY, { align: 'right' });
        startY += 8;
      });
    } else if (currentPackage.features && currentPackage.features.length > 0) {
      currentPackage.features.forEach((feature: string) => {
        doc.setFontSize(9.5);
        doc.setTextColor(70);
        doc.text(`• ${feature}`, 18, startY);
        startY += 7;
      });
    } else {
      doc.setFontSize(9.5);
      doc.setTextColor(100);
      doc.text("• Custom proposal or single asset request", 18, startY);
      startY += 8;
    }

    startY += 4;
    doc.setDrawColor(220);
    doc.line(14, startY, 196, startY);

    // 4. Total Amount
    startY += 12;
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text("Total Payable Amount:", 14, startY);

    doc.setFontSize(14);
    doc.setTextColor(34, 197, 94); // Green amount
    doc.text(`${currentPackage.totalUSD || currentPackage.price || 'Custom Quote'}`, 180, startY, { align: 'right' });

    // 5. Footer
    startY += 25;
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text("Thank you for choosing Creative Edge!  |  www.ankurbiswas.xyz", 105, startY, { align: "center" });

    // Auto Download
    const cleanTrx = trxId ? `_${trxId}` : '';
    doc.save(`Invoice_${currentPackage.id}${cleanTrx}.pdf`);
  };

  // ✅ Fixed Async API Submission Logic
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Post Order Data to Sanity API Route
      // ---> এই লাইনটি আপডেট করা হয়েছে <---
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: currentPackage.id,
          packageTitle: currentPackage.title,
          amount: currentPackage.totalUSD || currentPackage.price,
          paymentCategory: activeMainCategory,
          paymentMethod: currentSelectedData?.label,
          trxId,
          senderAccount,
          senderName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // 2. Trigger PDF Download with Generated Order ID
        generatePDFInvoice(data.orderId);

        alert('Payment info submitted successfully! Invoice downloading...');
        
        // Reset Inputs
        setTrxId('');
        setSenderAccount('');
        setSenderName('');
      } else {
        alert(data.error || 'Submission failed! Please try again.');
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert('Something went wrong during submission.');
    } finally {
      setIsSubmitting(false);
    }
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
          <span className="text-base">{currentPackage.totalUSD || currentPackage.price || 'Custom Quote'}</span>
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
                <input 
                  type="text" 
                  required 
                  value={senderAccount}
                  onChange={(e) => setSenderAccount(e.target.value)}
                  placeholder="e.g. 98765432101" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Sender Account Holder Name</label>
                <input 
                  type="text" 
                  required 
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. John Doe" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" 
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Enter Transaction ID (TrxID)</label>
              <input 
                type="text" 
                required 
                value={trxId}
                onChange={(e) => setTrxId(e.target.value)}
                placeholder="e.g. TRX10293847" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500" 
              />
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-200"
        >
          {isSubmitting ? "Submitting Order..." : "Submit Payment & Download Invoice"}
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