import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PermitShowcase from "@/components/PermitShowcase";
import ProblemSection from "@/components/ProblemSection";
import ComplianceReportPreview from "@/components/ComplianceReportPreview";
import BenefitsSection from "@/components/BenefitsSection";
import WhoItsFor from "@/components/WhoItsFor";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="how-it-works">
        <PermitShowcase />
      </div>
      <ProblemSection />
      <ComplianceReportPreview />
      <BenefitsSection />
      <WhoItsFor />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
