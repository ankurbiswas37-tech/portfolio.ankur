export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const sanityWriteClient = createClient({
  projectId: '3z1uy8z4',
  dataset: 'production',
  apiVersion: '2024-03-10',
  useCdn: false,
  token:'skvvJbMs9Y4qAK2fwMUyol9S80XLtT0t34L0blJOGzURFF5WstvTr7FUsPL9xDaHKYqlaqyL513S6dcv7P7hvf6iRuWIRv2G9VX2Q0L7Uwpa6gW7nLUUl7zncxXwCLf9UXGuPB7q6BmBIkZWo74oWQOih5ONPssmz6pGEkXhkC7bxOt4swgD',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, details } = body;

    if (!name || !email || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sanityWriteClient.create({
      _type: 'send-message',
      name,
      email,
      details,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Saved successfully!', id: result._id });
  } catch (error: any) {
    console.error('=== ACTUAL SANITY ERROR ===', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}