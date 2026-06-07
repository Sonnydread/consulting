import React from "react";
import AnimatedGridBackground from "./landing/animated-grid";
import Cinema from "./landing/slides";
import HeroConsultoria from "./landing/consultoria";
import AboutUsTCP from "./landing/aboutus";
import NeonSpotlightCard from "./landing/neon-spotlight";
import NivelSSMA from "./landing/nivel";
import StrategicAllianceSection from "./landing/strategic";
import FAQSection from "./landing/faqs";
import FooterPremium from "./landing/footer";
import Hey from "./landing/hey";
import MagicBentoShowcase from "./landing/magic-bento";
import BlobHero from "./landing/blob-hero";


import PremiumCardSwapHero from "./landing/premium-card";


export default function Page() {
  return (
    <>

      <AnimatedGridBackground />
      <PremiumCardSwapHero />
      <Cinema />
      <AboutUsTCP />
      <Hey />
      <HeroConsultoria />
      <MagicBentoShowcase />
      <NeonSpotlightCard />
      <StrategicAllianceSection />
      <BlobHero />
      <NivelSSMA />
      <FAQSection />
      <FooterPremium />
    </>
  );
}
