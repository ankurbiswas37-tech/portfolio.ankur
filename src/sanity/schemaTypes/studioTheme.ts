import { buildLegacyTheme } from 'sanity';

const props = {
  '--bg-black': '#0B0B0F',     // আপনার সাইটের মেইন ব্যাকগ্রাউন্ড
  '--card-bg': '#12121A',     // আপনার সাইটের ৪টি মেইন কার্ডের ব্যাকগ্রাউন্ড
  '--neon-cyan': '#00F5FF',   // আপনার ব্র্যান্ডের সিয়ান কালার
  '--brand-purple': '#8A2BE2', // আপনার ব্র্যান্ডের পার্পল কালার
  '--text-white': '#FFFFFF',   // হোয়াইট টেক্সট
  '--text-gray': '#9CA3AF',    // গ্রে টেক্সট
};

export const myStudioTheme = buildLegacyTheme({
  /* 🎨 ব্র্যান্ড কালারস */
  '--brand-primary': props['--neon-cyan'],

  /* 🏢 স্টুডিও ব্যাকগ্রাউন্ড ও কার্ডস */
  '--component-bg': props['--bg-black'],
  '--component-text-color': props['--text-white'],
  '--default-button-primary-color': props['--neon-cyan'],
  
  /* 🗂️ নেভিগেশন ও সাইডবার */
  '--main-navigation-color': props['--bg-black'],
  '--main-navigation-color--inverted': props['--text-white'],
  
  /* ✍️ ফোকাস ও স্টেট কালার */
  '--focus-color': props['--brand-purple'],
  '--state-info-color': props['--neon-cyan'],
  '--state-success-color': '#10B981',
  '--state-warning-color': '#F59E0B',
  '--state-danger-color': '#EF4444',
});