export interface PackageItem {
  id: string;
  type: 'fixed' | 'custom';
  title: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "visual-creatives",
    type: "fixed",
    title: "Visual & Brand Creatives",
    price: "$450",
    period: "/mo",
    description: "High-converting visual assets to elevate your brand presence.",
    features: [
      "High-CTR Thumbnails & Posters",
      "Meta / TikTok / Display Ad Creatives",
      "Social Media Banners & Posts",
      "Figma / PSD Source Files Included"
    ],
    buttonText: "Buy Now"
  },
  {
    id: "video-editing",
    type: "fixed",
    title: "High-Retention Video Editing",
    price: "$850",
    period: "/mo",
    description: "Engaging video content crafted for maximum audience retention.",
    features: [
      "Short-Form Videos (Reels/TikToks with SFX)",
      "High-Converting Paid Video Ads",
      "Long-Form YouTube & Podcast Editing",
      "2D Motion Graphics & Animation"
    ],
    buttonText: "Buy Now"
  },
  {
    id: "funnel-automation",
    type: "fixed",
    title: "Funnel & Automations",
    price: "$950",
    period: "/project",
    description: "Custom conversion funnels with seamless technical automation.",
    features: [
      "GoHighLevel / WordPress Landing Pages",
      "Full CRM & Workflow Automations",
      "Lead Magnet & Opt-in Systems",
      "Payment Gateway Integrations"
    ],
    buttonText: "Buy Now"
  },
  {
    id: "full-suite",
    type: "fixed",
    title: "Full-Funnel Growth Suite",
    price: "$2,200",
    period: "/mo",
    description: "Complete end-to-end design, video, and funnel architecture.",
    features: [
      "All-Inclusive Brand & Ad Visuals",
      "Complete Video Marketing Engine",
      "Full Funnel & GHL Setup",
      "Priority Support & Strategy Calls"
    ],
    popular: true,
    buttonText: "Buy Now"
  },
  {
    id: "custom-single-project",
    type: "custom",
    title: "Custom / Single Asset Project",
    description: "Need just 1 thumbnail, 1 video edit, or a GHL workflow fix?",
    features: [
      "Flexible Scope (Single Asset or Project)",
      "Tailored Pricing for Your Specific Need",
      "Fast & Efficient Turnaround",
      "Direct Consultation & Execution"
    ],
    buttonText: "Send Proposal"
  }
];