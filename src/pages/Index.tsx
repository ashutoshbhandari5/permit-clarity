import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PermitShowcase from "@/components/PermitShowcase";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ComplianceReportPreview from "@/components/ComplianceReportPreview";
import BenefitsSection from "@/components/BenefitsSection";
import WhoItsFor from "@/components/WhoItsFor";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PermitShowcase />
      <ProblemSection />
      <HowItWorks />
      <ComplianceReportPreview />
      <BenefitsSection />
      <WhoItsFor />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
