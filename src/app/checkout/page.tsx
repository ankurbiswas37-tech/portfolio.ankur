'use client';

import React, { useState } from 'react';

// Interfaces / Types (Modify based on your actual data structure)
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Sample Item', price: 100, quantity: 1 },
  ]);

  // Updated handleDownloadPDF Function
  const handleDownloadPDF = async () => {
    try {
      setLoading(true);
      
      // Dynamic import for client-side rendering (jspdf / html2canvas if used)
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();

      // Invoice Header
      doc.setFontSize(20);
      doc.text('Order Invoice', 14, 22);

      // Invoice Details
      doc.setFontSize(12);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 32);

      // Line items
      let startY = 45;
      doc.text('Item Name', 14, startY);
      doc.text('Qty', 110, startY);
      doc.text('Price', 150, startY);
      
      doc.line(14, startY + 2, 196, startY + 2); // Separator line

      let total = 0;
      cartItems.forEach((item, index) => {
        const y = startY + 12 + index * 10;
        doc.text(item.name, 14, y);
        doc.text(item.quantity.toString(), 110, y);
        doc.text(`$${item.price.toFixed(2)}`, 150, y);
        total += item.price * item.quantity;
      });

      // Total
      const finalY = startY + 20 + cartItems.length * 10;
      doc.line(14, finalY - 5, 196, finalY - 5);
      doc.setFontSize(14);
      doc.text(`Total: $${total.toFixed(2)}`, 140, finalY);

      // Download PDF
      doc.save(`invoice_${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('PDF ডাউনলোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Order Summary Table */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="border-t border-b py-4 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center my-2">
              <span>{item.name} (x{item.quantity})</span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Download PDF Button */}
        <button
          onClick={handleDownloadPDF}
          disabled={loading}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition disabled:opacity-50"
        >
          {loading ? 'PDF তৈরি হচ্ছে...' : 'Download Invoice (PDF)'}
        </button>
      </div>
    </div>
  );
}