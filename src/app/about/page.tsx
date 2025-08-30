import { About } from "@/components/About/About";
import { Benefit } from "@/components/About/Benefit";
import { PageLanding } from "@/components/PageLanding";
import { TheATeam } from "@/components/About/TheATeam";
import { Footer } from "@/components/Home/Footer";
import { Testimonials } from "@/components/Home2/Testimonials";
import { Services } from "@/components/Home3/Services";
import { FunFacts } from "@/components/Home2/Benefits";
import { ScrollBarAnime } from "@/components/animations/scroll";
import { ClientSection } from "@/components/Home/Client";

const AboutPage = () => {
   return (
      <>
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <PageLanding header="About Us" title="About Us" />
            <About />
            <Services />
            <Benefit />
            <FunFacts />
            <Testimonials />
            <TheATeam />
            <ClientSection />
         </main>
         <Footer />
      </>
   );
};

export default AboutPage;
