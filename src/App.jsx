import { CTASection } from "./components/CTASection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TestimonialsSeaction } from "./components/TestimonialsSeaction";

export function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSeaction />
      <CTASection />
      <Footer />
    </>
  );
}
