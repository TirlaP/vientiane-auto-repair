import Image from "next/image";

import FAQAccordions from "@/components/FAQ's/FAQAccordions";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import GetInTouchSection from "@/components/Home/GetInTouch";
import { ScrollBarAnime } from "@/components/animations/scroll";
import { ClientSection } from "@/components/Home/Client";

const FaqPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <PageLanding title="Our Faqs" header="Our Faq" />
            <div className="container grid grid-cols-3 gap-3 py-9 md:gap-6 md:py-[80px] lg:gap-10 lg:py-[120px] xl:gap-16 xl:py-[150px]">
               <div className="hidden lg:block">
                  <Image
                     src="/images/image-23.png"
                     width={420}
                     height={530}
                     alt="faq"
                     className="h-auto w-full"
                  />
               </div>
               <div className="col-span-3 font-header lg:col-span-2">
                  <div className="grid space-y-8">
                     <div className="relative">
                        <p className="absolute left-0 top-0 z-10 text-sm font-extrabold uppercase leading-7 text-default-black xl:text-base">
                           core feature
                        </p>
                        <div className="absolute -left-2 top-0.5 z-0 h-6 w-6 rounded-full bg-tertiary" />
                     </div>
                     <h2 className="text-3xl font-black uppercase lg:text-4xl xl:text-5xl xl:leading-heavy">
                        asked questions
                     </h2>
                  </div>

                  <div className="mt-4 max-h-[400px] lg:hidden">
                     <Image
                        src="/images/image-23.png"
                        width={420}
                        height={530}
                        alt="faq"
                        className="h-[200px] max-h-[300px] w-full object-cover md:h-[300px]"
                     />
                  </div>

                  <FAQAccordions />
               </div>
            </div>
            <GetInTouchSection isPage />
            <ClientSection />
         </main>
         <Footer />
      </>
   );
};

export default FaqPage;
