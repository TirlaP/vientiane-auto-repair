import { Footer } from "@/components/Home/Footer";
import { TestimonialSection } from "@/components/Home/Testimonial";
import { Services } from "@/components/Home3/Services";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { PricingSection } from "@/components/Pricing";
import { ScrollBarAnime } from "@/components/animations/scroll";

const PricingPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <PageLanding header="pricing plan" title="pricing plan" />
            <PricingSection />
            <TestimonialSection />
            <Services />
         </main>
         <Footer />
      </>
   );
};

export default PricingPage;
