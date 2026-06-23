import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'CreativeEdge Studio',

  // 🎯 আপনার আসল প্রজেক্ট আইডি সরাসরি ম্যাপ করা হলো ভাই
  projectId: '3z1uy8z4', 
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});