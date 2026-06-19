import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        <PortfolioGrid />
        <About />
      </main>
      <ContactAndFooter />
    </div>
  );
}