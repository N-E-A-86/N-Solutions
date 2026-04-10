import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Automation } from '@/components/Automation';
import { Logistics } from '@/components/Logistics';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ParticleCursor } from '@/components/ParticleCursor';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#00E5FF] selection:text-black">
      <ParticleCursor />
      <Navbar />
      <Hero />
      <Services />
      <Automation />
      <Logistics />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
