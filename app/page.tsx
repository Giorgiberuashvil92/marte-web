import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ModernAppSection from "./components/ModernAppSection";
import WhyChooseCargo from "./components/WhyChooseCargo";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ModernAppSection />
      <WhyChooseCargo />
      <FAQ />
    </div>
  );
}
