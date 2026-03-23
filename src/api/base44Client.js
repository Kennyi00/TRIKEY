import CRTOverlay from "../components/retro/CRTOverlay";
import VHSBadge from "../components/retro/VHSBadge";
import HeroSection from "../components/retro/HeroSection";
import AboutSection from "../components/retro/AboutSection";
import GallerySection from "../components/retro/GallerySection";
import DevLogSection from "../components/retro/DevLogSection";
import FooterSection from "../components/retro/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <CRTOverlay />
      <VHSBadge />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <DevLogSection />
      <FooterSection />
    </div>
  );
}