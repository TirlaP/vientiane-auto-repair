import { ScrollBarAnime } from "@/components/animations/scroll";
import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { ProjectSection } from "@/components/Home/Projects";
import { TestimonialSection } from "@/components/Home/Testimonial";
import { FunFacts } from "@/components/Home2/Benefits";
import { About } from "@/components/Home3/About";
import { Blogs } from "@/components/Home3/Blogs";
import { IntroVideo } from "@/components/Home3/IntroVideo";
import { Hero } from "@/components/Home3/Hero";
import { Navbar } from "@/components/Home3/Navbar";
import { Services } from "@/components/Home3/Services";
import { TheATeam } from "@/components/Home3/TheATeam";
import { WhoChooseUs } from "@/components/Home3/WhoChooseUs";
import { ClientSection } from "@/components/Home/Client";

const Home3 = () => {
   return (
      <>
         <Navbar />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <Hero />
            <About />
            <ClientSection />
            <Services />
            <WhoChooseUs />
            <FunFacts />
            <TheATeam />
            <TestimonialSection />
            <ProjectSection isWhite />
            <CtaSection />
            <IntroVideo />
            <Blogs />
         </main>
         <Footer />
      </>
   );
};

export default Home3;
