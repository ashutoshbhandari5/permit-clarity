import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Permit Shark check my plans for compliance?",
    answer:
      "Upload your architectural plans in PDF or CAD format. Our AI analyzes your designs against local zoning codes, setback requirements, height limits, and lot coverage rules—delivering a detailed compliance report in minutes.",
  },
  {
    question: "Which jurisdictions do you support?",
    answer:
      "We currently support major metropolitan areas across the US, including San Francisco, Los Angeles, New York, Chicago, and over 200 other cities. We're constantly adding new jurisdictions—contact us if you need a specific location.",
  },
  {
    question: "What file formats can I upload?",
    answer:
      "We accept PDF, DWG, DXF, and common image formats (PNG, JPG). For best results, we recommend PDF exports from your CAD software with layers preserved.",
  },
  {
    question: "How accurate is the compliance analysis?",
    answer:
      "Our AI achieves 95%+ accuracy on standard zoning checks. We flag potential issues and provide specific code references so you can verify. Complex variances or special use permits may require additional professional review.",
  },
  {
    question: "Can Permit Shark replace my permit expediter?",
    answer:
      "Permit Shark handles the pre-submission compliance check—catching issues before you file. You'll still need to submit through official channels, but you'll go in confident your plans will pass the first time.",
  },
  {
    question: "What happens if my plans have compliance issues?",
    answer:
      "We provide specific, actionable guidance on what needs to change. For common issues like setback violations, we show exactly how much adjustment is needed. You can make changes and re-check instantly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploads are encrypted in transit and at rest. We never share your plans with third parties, and you can delete your data at any time. We're SOC 2 Type II compliant.",
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer:
      "Absolutely. Our Pro plan includes unlimited team members, and Enterprise adds SSO, custom integrations, and dedicated support. Contact us for volume pricing on large-scale projects.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl parallax-slow" />

      <div className="container-wide px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="badge-accent mb-4 mx-auto w-fit">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Common <span className="text-accent">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Permit Shark and how it works.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/30 border border-border/50 rounded-xl px-6 data-[state=open]:bg-secondary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
