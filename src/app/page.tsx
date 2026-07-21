import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials"; // 👈 ১. টেস্টমোনিয়াল কম্পোনেন্ট ইম্পোর্ট করা হলো
import PortfolioGrid from "@/components/PortfolioGrid";
import About from '@/components/About';
import ContactAndFooter from "@/components/ContactAndFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* 🌟 ২. পোর্টফোলিও সেকশনের ঠিক ওপরে ক্লায়েন্ট রিভিউ স্লাইডার */}
        <Testimonials />

        {/* 🎴 পোর্টফোলিও গ্রিড */}
        <PortfolioGrid />
        <About />
      </main>
      <ContactAndFooter />
    </div>
  );
}