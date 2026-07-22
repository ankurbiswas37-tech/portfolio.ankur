import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Sanity Write Client Setup
const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3z1uy8z4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-10',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // Write Token from Vercel / .env.local
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      packageId,
      packageTitle,
      amount,
      paymentCategory,
      paymentMethod,
      trxId,
      senderAccount,
      senderName,
    } = body;

    // Generate a unique Order ID
    const generatedOrderId = `ORD-${Date.now().toString().slice(-6)}`;

    // Create Order Document in Sanity
    const result = await sanityWriteClient.create({
      _type: 'order',
      orderId: generatedOrderId,
      packageTitle: packageTitle || 'Custom Package',
      amount: Number(amount) || 0,
      paymentCategory: paymentCategory || 'International',
      paymentMethod: paymentMethod || 'Direct Transfer',
      trxId: trxId || '',
      senderAccount: senderAccount || '',
      senderName: senderName || '',
      status: 'pending', // Initial Admin Approval Status
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Order details submitted successfully! Awaiting verification.',
      orderId: generatedOrderId,
      id: result._id,
    });
  } catch (error: any) {
    console.error('=== SANITY CHECKOUT ORDER ERROR ===', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}