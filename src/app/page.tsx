import { Navbar } from "@/components/Home/Navbar";
import { HeroSection } from "@/components/Home/Hero";
import { AboutSection } from "@/components/Home/About";
import { ServiceSection } from "@/components/Home/ServiceSection";
import { ClientSection } from "@/components/Home/Client";
import { WhoChooseUs } from "@/components/Home/WhoChooseUs";
import { ProjectSection } from "@/components/Home/Projects";
import GetInTouchSection from "@/components/Home/GetInTouch";
import { TestimonialSection } from "@/components/Home/Testimonial";
import { BlogSection } from "@/components/Home/Blog";
import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { ScrollBarAnime } from "@/components/animations/scroll";

export default function Home() {
   return (
      <>
         <main>
            <ScrollBarAnime />
            <Navbar isFixed />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ClientSection />
            <WhoChooseUs />
            <ProjectSection />
            <GetInTouchSection />
            <TestimonialSection />
            <BlogSection />
            <CtaSection />
         </main>
         <Footer />
      </>
   );
}
