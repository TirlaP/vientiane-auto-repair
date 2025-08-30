import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { ServiceSection } from "@/components/Home/ServiceSection";
import { About } from "@/components/Home2/About";
import { IntroVideo } from "@/components/Home3/IntroVideo";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { PricingSection } from "@/components/Pricing";
import { ScrollBarAnime } from "@/components/animations/scroll";

const ServicesPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main>
            <ScrollBarAnime />
            <PageLanding header="our service" title="Our Services" />
            <ServiceSection isWhite />
            <IntroVideo />
            <About isPage />
            <CtaSection />
            <PricingSection />
         </main>
         <Footer />
      </>
   );
};

export default ServicesPage;
