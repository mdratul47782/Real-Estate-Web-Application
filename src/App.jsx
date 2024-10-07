import AboutSection from "./Components/AboutSection";
import Contact from "./Components/Contact";
import CTASection from "./Components/CTASection";
import FAQSection from "./Components/FAQSection";
import FeaturesSection from "./Components/FeaturesSection";
import FooterPart from "./Components/FooterPart";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import OurTeamMembers from "./Components/OurTeamMembers";
import PropertiesSection from "./Components/PropertiesSection";
export default function App() {
  return (
    <>
    
      <Navbar />
      <HeroSection/>
      <FeaturesSection />
      <PropertiesSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <OurTeamMembers />
      <Contact />
      <FooterPart />


    </>
  );
}
