'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config'; // আপনার Sanity Config-এর পাথ অনুযায়ী

export default function StudioPage() {
  return <NextStudio config={config} />;
}