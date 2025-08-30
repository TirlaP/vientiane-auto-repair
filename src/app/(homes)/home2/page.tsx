import { ScrollBarAnime } from "@/components/animations/scroll";
import { ClientSection } from "@/components/Home/Client";
import { About } from "@/components/Home2/About";
import { Benefits } from "@/components/Home2/Benefits";
import { Blogs } from "@/components/Home2/Blogs";
import { Features } from "@/components/Home2/Features";
import { Footer } from "@/components/Home2/Footer";
import { Hero } from "@/components/Home2/Hero";
import { Navbar } from "@/components/Home2/Navbar";
import { Offers } from "@/components/Home2/Offers";
import { Services } from "@/components/Home2/Services";
import { Testimonials } from "@/components/Home2/Testimonials";
import { PricingSection } from "@/components/Pricing";

const Home2Page = () => {
   return (
      <>
         <Navbar />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <Hero />
            <Features />
            <About />
            <Services />
            <ClientSection />
            <Benefits />
            <PricingSection />
            <Offers />
            <Testimonials />
            <Blogs />
         </main>
         <Footer />
      </>
   );
};

export default Home2Page;
