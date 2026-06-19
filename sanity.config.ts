import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { contactSchema } from './src/sanity/schemaTypes/contact';

export default defineConfig({
  name: 'default',
  title: 'CreativeEdge Studio',

  // 🎯 আপনার ড্যাশবোর্ডের আসল প্রোজেক্ট আইডি এখানে বসাবেন (যেমন: 'p9x24abc')
  // অথবা আপনার .env.local ফাইলে থাকা আইডিটি নিচে সরাসরি পেস্ট করে দিন:
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'আপনার_আসল_আইডি_এখানে_বসাবেন', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [contactSchema],
  },
});