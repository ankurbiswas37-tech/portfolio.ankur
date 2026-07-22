export interface ServiceItem {
  name: string;
  price: number;
}

export interface PackageItem {
  id: string;
  slug?: string;
  type: 'fixed' | 'custom';
  title: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  services?: ServiceItem[]; // Order Summary breakdown
  totalUSD?: string;
}

// Order Interface for dynamic backend/database operations
export interface Order {
  _id?: string;
  orderId: string;
  packageId: string;
  packageTitle: string;
  amount: string;
  paymentCategory: 'international' | 'crypto' | 'local';
  paymentMethod: string;
  trxId?: string;
  senderAccount?: string;
  senderName?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export const packagesData: PackageItem[] = [
  {
    id: 'visual-brand',
    type: 'fixed',
    title: 'Visual & Brand Creatives',
    price: '$450',
    period: '/mo',
    description: 'High-converting visual assets to elevate your brand presence.',
    features: [
      'High-CTR Thumbnails & Posters',
      'Meta / TikTok / Display Ad Creatives',
      'Social Media Banners & Posts',
      'Figma / PSD Source Files Included',
    ],
    buttonText: 'Buy Now',
    services: [
      { name: 'Brand Visual Guidelines & Assets', price: 200 },
      { name: 'Custom Social Media Creatives (x15)', price: 150 },
      { name: 'Motion Graphic Overlay Assets', price: 100 },
    ],
    totalUSD: '$450.00 USD',
  },
  {
    id: 'video-editing',
    type: 'fixed',
    title: 'High-Retention Video Editing',
    price: '$850',
    period: '/mo',
    description: 'Engaging video content crafted for maximum audience retention.',
    features: [
      'Short-Form Videos (Reels/TikToks with SFX)',
      'High-Converting Paid Video Ads',
      'Long-Form YouTube & Podcast Editing',
      '2D Motion Graphics & Animation',
    ],
    buttonText: 'Buy Now',
    services: [
      { name: 'Short-Form Videos (Reels/TikToks with SFX)', price: 350 },
      { name: 'Long-Form YouTube & Podcast Editing', price: 300 },
      { name: '2D Motion Graphics & Animation', price: 200 },
    ],
    totalUSD: '$850.00 USD',
  },
  {
    id: 'funnel-automation',
    type: 'fixed',
    title: 'Funnel & Automations',
    price: '$950',
    period: '/project',
    description: 'Custom conversion funnels with seamless technical automation.',
    features: [
      'GoHighLevel / WordPress Landing Pages',
      'Full CRM & Workflow Automations',
      'Lead Magnet & Opt-in Systems',
      'Payment Gateway Integrations',
    ],
    buttonText: 'Buy Now',
    services: [
      { name: 'GoHighLevel / WordPress Landing Pages', price: 450 },
      { name: 'Full CRM & Workflow Automations', price: 300 },
      { name: 'Lead Magnet & Payment Gateway Integrations', price: 200 },
    ],
    totalUSD: '$950.00 USD',
  },
  {
    id: 'full-growth',
    type: 'fixed',
    title: 'Full-Funnel Growth Suite',
    price: '$2,200',
    period: '/mo',
    popular: true,
    description: 'Complete end-to-end design, video, and funnel architecture.',
    features: [
      'All-Inclusive Brand & Ad Visuals',
      'Complete Video Marketing Engine',
      'Full Funnel & GHL Setup',
      'Priority Support & Strategy Calls',
    ],
    buttonText: 'Buy Now',
    services: [
      { name: 'All-Inclusive Brand & Ad Visuals', price: 600 },
      { name: 'Complete Video Marketing Engine', price: 800 },
      { name: 'Full Funnel & GHL Setup', price: 500 },
      { name: 'Priority Support & Strategy Calls', price: 300 },
    ],
    totalUSD: '$2,200.00 USD',
  },
  {
    id: 'custom-project',
    type: 'custom',
    title: 'Custom / Single Asset Project',
    description: 'Need just 1 thumbnail, 1 video edit, or a GHL workflow fix?',
    features: [
      'Flexible Scope (Single Asset or Project)',
      'Tailored Pricing for Your Specific Need',
      'Fast & Efficient Turnaround',
      'Direct Consultation & Execution',
    ],
    buttonText: 'Send Proposal',
  },
];