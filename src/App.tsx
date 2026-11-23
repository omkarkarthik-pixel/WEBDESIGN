import { useCallback, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CapabilityMarquee } from './components/CapabilityMarquee';
import { ContactSection } from './components/ContactSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { PresenceSection } from './components/PresenceSection';
import { WhyFinaptSection } from './components/WhyFinaptSection';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleSelectServiceForEnquiry = useCallback((serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#14283D]">
      <LoadingScreen />
      <Navbar />

      <main>
        <HeroSection />
        <CapabilityMarquee />
        <AboutSection />
        <ExpertiseSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />
        <LeadershipSection />
        <PresenceSection />
        <WhyFinaptSection />
        <ContactSection selectedService={selectedService} />
      </main>

      <Footer onSelectService={handleSelectServiceForEnquiry} />
    </div>
  );
}
