'use client';

import React, { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [trxId, setTrxId] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sample Purchase Details (আপনি আপনার প্রয়োজন অনুযায়ী এডিটেবল বা ডায়নামিক করতে পারেন)
  const [cartItems] = useState<CartItem[]>([
    { id: '1', name: 'Premium Service Package', price: 1500, quantity: 1 },
    { id: '2', name: 'Custom Design Asset', price: 500, quantity: 1 },
  ]);

  // Bank & Payment Information
  const paymentDetails = {
    bankName: 'City Bank Ltd.',
    accountName: 'Ankur Biswas',
    accountNumber: '1234567890',
    branch: 'Dhaka Branch',
    bkashNagad: '01700000000 (Personal)',
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId.trim()) {
      alert('অনুগ্রহ করে Transaction ID বসান।');
      return;
    }
    // Submit state updated
    setIsSubmitted(true);
  };

  // PDF Generator Function
  const handleDownloadPDF = async () => {
    try {
      setLoading(true);

      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();

      // Title & Branding
      doc.setFontSize(22);
      doc.text('PAYMENT RECEIPT', 14, 20);

      doc.setFontSize(10);
      doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 14, 28);
      doc.text(`Status: Paid`, 14, 34);

      // Line Divider
      doc.line(14, 38, 196, 38);

      // Payment Method / Trx Details
      doc.setFontSize(12);
      doc.text('Payment Information:', 14, 46);
      doc.setFontSize(10);
      doc.text(`Bank Name: ${paymentDetails.bankName}`, 14, 52);
      doc.text(`Account Name: ${paymentDetails.accountName}`, 14, 58);
      doc.text(`Transaction ID: ${trxId}`, 14, 64);

      // Order Items Header
      let startY = 76;
      doc.setFontSize(12);
      doc.text('Item Description', 14, startY);
      doc.text('Qty', 130, startY);
      doc.text('Amount (BDT)', 160, startY);

      doc.line(14, startY + 2, 196, startY + 2);

      // Order Items Loop
      doc.setFontSize(10);
      cartItems.forEach((item, index) => {
        const y = startY + 10 + index * 8;
        doc.text(item.name, 14, y);
        doc.text(item.quantity.toString(), 130, y);
        doc.text(`BDT ${(item.price * item.quantity).toFixed(2)}`, 160, y);
      });

      // Total Line
      const finalY = startY + 18 + cartItems.length * 8;
      doc.line(14, finalY, 196, finalY);
      doc.setFontSize(12);
      doc.text(`Total Paid: BDT ${totalAmount.toFixed(2)}`, 140, finalY + 8);

      // Footer Note
      doc.setFontSize(9);
      doc.text(
        'Thank you for your business! If you have any questions, please contact support.',
        14,
        finalY + 22
      );

      // Save PDF
      doc.save(`Receipt_${trxId}_${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF তৈরি করতে সমস্যা হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Checkout
        </h1>

        {/* 1. Purchase Summary Section */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-semibold mb-3 text-slate-200">
            Order Summary
          </h2>
          <div className="space-y-2 border-b border-slate-700 pb-3 mb-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm text-slate-300"
              >
                <span>
                  {item.name} <span className="text-slate-500">(x{item.quantity})</span>
                </span>
                <span className="font-medium">
                  BDT {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-base font-bold text-emerald-400">
            <span>Total Payable Amount</span>
            <span>BDT {totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* 2. Bank / Payment Details */}
        <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 mb-6 text-sm text-slate-300 space-y-1.5">
          <h2 className="text-base font-semibold text-slate-100 mb-2">
            Payment Details
          </h2>
          <p>
            <strong className="text-slate-400">Bank Name:</strong>{' '}
            {paymentDetails.bankName}
          </p>
          <p>
            <strong className="text-slate-400">Account Name:</strong>{' '}
            {paymentDetails.accountName}
          </p>
          <p>
            <strong className="text-slate-400">Account No:</strong>{' '}
            {paymentDetails.accountNumber}
          </p>
          <p>
            <strong className="text-slate-400">bKash/Nagad (Personal):</strong>{' '}
            {paymentDetails.bkashNagad}
          </p>
        </div>

        {/* 3. Dynamic Section: Before vs After Submit */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmitPayment} className="space-y-4">
            <div>
              <label
                htmlFor="trxId"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Enter Transaction ID (TrxID)
              </label>
              <input
                id="trxId"
                type="text"
                required
                value={trxId}
                onChange={(e) => setTrxId(e.target.value)}
                placeholder="e.g. TRX10293847"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition duration-200"
            >
              Submit Payment
            </button>
          </form>
        ) : (
          /* 4. Payment Success & Download PDF State */
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-6 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
              ✓
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400">
                Payment Successful!
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Transaction ID: <span className="text-slate-200 font-mono">{trxId}</span>
              </p>
            </div>

            <button
              onClick={handleDownloadPDF}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Generating Invoice...' : 'Download Invoice (PDF)'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}