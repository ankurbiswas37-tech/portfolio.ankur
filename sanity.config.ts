import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { myStudioTheme } from './src/sanity/schemaTypes/studioTheme'; // 👈 আমরা পাথটি একদম নিখুঁত করে দিয়েছি ভাই

export default defineConfig({
  name: 'default',
  title: 'Neon Hippo Dashboard', // আপনার ব্র্যান্ডের নাম

  projectId: '3z1uy8z4', 
  dataset: 'production',
  basePath: '/studio',

  // 🎨 থিম ইন্টিগ্রেশন
  theme: myStudioTheme, 

  plugins: [
    structureTool()
  ],

  schema: {
    types: schemaTypes,
  },
});