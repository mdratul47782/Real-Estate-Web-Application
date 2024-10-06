import AboutSection from "./Components/AboutSection";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import PropertiesSection from "./Components/PropertiesSection";
import CTASection from "./Components/CTASection";
import FAQSection from "./Components/FAQSection";
import Contact from "./Components/Contact";
import FooterPart from "./Components/FooterPart";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <FeaturesSection />
        <PropertiesSection />
        <AboutSection />
        <CTASection />
        <FAQSection />
        <Contact />
      </HeroSection>
      <FooterPart />
    </>
  );
}
