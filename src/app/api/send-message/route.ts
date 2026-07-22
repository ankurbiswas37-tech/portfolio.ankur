export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Sanity Client Setup
const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3z1uy8z4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-10',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN || 'skvvJbMs9Y4qAK2fwMUyol9S80XLtT0t34L0blJOGzURFF5WstvTr7FUsPL9xDaHKYqlaqyL513S6dcv7P7hvf6iRuWIRv2G9VX2Q0L7Uwpa6gW7nLUUl7zncxXwCLf9UXGuPB7q6BmBIkZWo74oWQOih5ONPssmz6pGEkXhkC7bxOt4swgD',
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

    // 1. Basic Validation Check
    if (!trxId && !senderAccount) {
      return NextResponse.json(
        { error: 'Transaction ID or Bank Account Details are required' },
        { status: 400 }
      );
    }

    // 2. Generate Unique Order ID
    const generatedOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

    // 3. Create Document in Sanity Studio
    const result = await sanityWriteClient.create({
      _type: 'order',
      orderId: generatedOrderId,
      packageId: packageId || 'unknown-package',
      packageTitle: packageTitle || 'Custom Package',
      amount: amount || '$0.00',
      paymentCategory: paymentCategory || 'local',
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