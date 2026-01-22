import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import AboutSection from "@/components/landing/AboutSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ProgramSection from "@/components/landing/ProgramSection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import InvestmentSection from "@/components/landing/InvestmentSection";
import InstructorsSection from "@/components/landing/InstructorsSection";

import AuthoritySection from "@/components/landing/AuthoritySection";
import CommunitySection from "@/components/landing/CommunitySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PainSection />
      <AboutSection />
      <AudienceSection />
      <ProgramSection />
      <ScheduleSection />
      <BenefitsSection />
      <InvestmentSection />
      <InstructorsSection />
      
      <AuthoritySection />
      <CommunitySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
