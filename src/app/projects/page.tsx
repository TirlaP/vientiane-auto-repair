import { ScrollBarAnime } from "@/components/animations/scroll";
import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { Projects } from "@/components/Projects/Projects";

const ProjectPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main>
            <ScrollBarAnime />
            <PageLanding header="repair project" title="Repair Project" />
            <Projects />
            <CtaSection />
         </main>
         <Footer />
      </>
   );
};

export default ProjectPage;
