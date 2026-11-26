import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [highlightedServiceId, setHighlightedServiceId] = useState<string | null>(
    null
  );
  const [selectedContactService, setSelectedContactService] = useState<
    string | undefined
  >(undefined);

  const handleInquireService = (serviceTitle: string) => {
    setSelectedContactService(serviceTitle);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-sky-100 via-pink-50 to-rose-100 text-slate-900">
      {/* Fixed Sky-Blue & Light-Pink Merged Ambient Orbs for Glassmorphism Depth */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-sky-300/45 blur-3xl" />
        <div className="absolute top-1/4 -right-24 h-[480px] w-[480px] rounded-full bg-pink-300/45 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-sky-200/50 to-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-[420px] w-[420px] rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar onSelectService={(id) => setHighlightedServiceId(id)} />
        <main>
          <Hero />
          <ServicesSection
            highlightedServiceId={highlightedServiceId}
            onInquireService={handleInquireService}
          />
          <PortfolioSection onInquireService={handleInquireService} />
          <ProcessSection />
          <ContactSection selectedService={selectedContactService} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
