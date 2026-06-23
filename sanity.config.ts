import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes'; // 👈 আমরা সরাসরি ইনডেক্স ফাইল থেকে সব স্কিমা নিয়ে আসছি

export default defineConfig({
  name: 'default',
  title: 'CreativeEdge Studio',

  // আপনার আসল প্রজেক্ট আইডি এবং এনভায়রনমেন্ট ভেরিয়েবল
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'আপনার_আসল_আইডি_এখানে_বসাবেন', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes, // 👈 এখানে contactSchema-র বদলে schemaTypes হবে, যা সব স্কিমা লোড করবে
  },
});