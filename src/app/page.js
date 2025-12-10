
import CtaSection from "./components/CtaSection";
import CtaSection2 from "./components/CtaSection2";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import MenSection from "./components/MenSection";
import TopSellers from "./components/TopSeller";
import WomenSection from "./components/WomenSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      
      {/* Hero Section */}
      <HeroSection />
      <TopSellers/>
      <MenSection/>
      <CtaSection/>
      <WomenSection/>
      <CtaSection2/>
      {/* <Footer/> */}
    </main>
  );
}