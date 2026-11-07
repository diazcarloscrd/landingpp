import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustrySolutionsSection } from "@/components/sections/IndustrySolutionsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <IndustrySolutionsSection />
        <ProcessSection />
        <FAQSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  );
}
