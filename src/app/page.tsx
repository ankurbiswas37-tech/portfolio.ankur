import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos"; // 👈 ১. ClientLogos কম্পোনেন্ট ইম্পোর্ট করা হলো
import Testimonials from "@/components/Testimonials";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from '@/components/About';
import Faq from "@/components/Faq";
import ContactAndFooter from "@/components/ContactAndFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* 🏢 ক্লায়েন্ট ব্র্যান্ড লোগো স্লাইডার (Monochrome Scrolling) */}
        <ClientLogos />

        {/* 🌟 ক্লায়েন্ট রিভিউ স্লাইডার */}
        <Testimonials />

        {/* 🎴 পোর্টফোলিও গ্রিড */}
        <PortfolioGrid />
        
        {/* 👤 অ্যাবাউট সেকশন */}
        <About />

        {/* ❓ Start Your Project এর ঠিক ওপরে FAQ সেকশন */}
        <Faq />
      </main>

      {/* 🚀 Start Your Project & Footer Section */}
      <ContactAndFooter />
    </div>
  );
}