import BrandPhilosophy from "./components/BrandPhilosophy";
import HeroSection from "./components/Hero";
import MenSection from "./components/MenSection";
import TopSellers from "./components/TopSeller";
import WomenSection from "./components/WomenSection";
import LifestyleBanner from "./components/LifestyleBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      
      {/* Hero Section */}
      <HeroSection />
      <TopSellers/>
      <MenSection/>
      <BrandPhilosophy/>
      <WomenSection/>
      <LifestyleBanner/>

    </main>
  );
}