'use client';

import { NextStudio } from 'next-sanity/studio'; // 🎯 'sanity/next-studio' এর বদলে 'next-sanity/studio' হবে
import config from '@/../sanity.config'; 

export default function StudioPage() {
  return <NextStudio config={config} />;
}