import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpotifySection from "@/components/SpotifySection";
import BioSection from "@/components/BioSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <HeroSection />
      <SpotifySection />
      <BioSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;