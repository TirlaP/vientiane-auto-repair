import { Footer } from "@/components/Home/Footer";
import { Testimonials } from "@/components/Home2/Testimonials";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { JoinOurTeam } from "@/components/Team/JoinOurTeam";
import { Teams } from "@/components/Team/Teams";
import { ScrollBarAnime } from "@/components/animations/scroll";

const TeamsPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <PageLanding header="our team" title="our team" />
            <Teams />
            <JoinOurTeam />
            <Testimonials />
         </main>
         <Footer />
      </>
   );
};

export default TeamsPage;
