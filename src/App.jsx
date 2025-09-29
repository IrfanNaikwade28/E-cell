import HeroSection from './components/HeroSection';
import { NavbarDemo } from './components/NavbarDemo';
import { AboutSect } from './components/AboutSect';
import { TimelineDemo } from './components/TimelineDemo';
import { Eventspotlight } from './components/Eventspotlight';
import { TeamMember } from './components/TeamMember';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo/>
      <main>
        <HeroSection />
        <AboutSect /> 
        <TimelineDemo /> 
        <Eventspotlight /> 
        <TeamMember /> 
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
}