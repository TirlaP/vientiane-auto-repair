import { ScrollBarAnime } from "@/components/animations/scroll";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { ContactUs } from "@/components/Contact/ContactUs";
import { Map } from "@/components/Contact/Map";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";

const ContactPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main>
            <ScrollBarAnime />
            <PageLanding header="contact us" title="Contact Us" />
            <ContactUs />
            <Map />
            <ContactInfo />
         </main>
         <Footer />
      </>
   );
};

export default ContactPage;
