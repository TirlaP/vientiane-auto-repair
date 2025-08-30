import Image from "next/image";

import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { ServiceDetailsAccordion } from "@/components/Services/ServiceDetailsAccordion";
import { SidebarList } from "@/components/SidebarList";
import { services_list } from "@/lib/mock-data";
import { ScrollBarAnime } from "@/components/animations/scroll";

const ServiceDetails = () => {
   return (
      <>
         <Navbar isFixed />
         <main>
            <ScrollBarAnime />
            <PageLanding title="Service Details" header="break repair" />
            <div className="container grid gap-3 px-2.5 py-9 font-header md:grid-cols-3 md:gap-6 md:py-[80px] lg:gap-8 lg:py-[120px] xl:px-0 xl:py-[150px]">
               <div className="order-2 col-span-2 md:order-1 md:col-span-1">
                  <SidebarList
                     listItem={services_list}
                     name="service list"
                     active={2}
                  />
               </div>
               <div className="order-1 col-span-2 md:order-2">
                  <h2 className="text-3xl font-black uppercase text-default-black lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
                     Break repair
                  </h2>

                  <article>
                     <div className="article_p article_img">
                        <p>
                           Niseu account pulvinar sapien nam ligula conubia
                           zurae maecenas pellentesque elementum dictum aliquam
                           tincidunt elit augue aenean laoreet lacus luctus.
                           Pulvinar vitae rhoncus ullamcorper suspendisse curae
                           tempus auctor parturient neque conubia maecenas.
                        </p>
                        <p>
                           maecenas pellentesque elementum dictum aliquam
                           tincidunt elite augue aenean laoreet lacus an luctus
                           pulvinar vitae rhoncus ullamcorper facilisi pede
                           sociosqu eudu neque rhoncus dise.
                        </p>
                        <Image
                           src="/images/image-31.png"
                           alt="service details"
                           width={870}
                           height={500}
                        />
                     </div>
                     <div className="article_p">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           remarking services
                        </h3>
                        <p>
                           Praesent class cume mollis pretium diam nisad iaculis
                           sociis massa auctors into duila fringilla bibendum
                           Nostra mattis cras auctor. Taciti dictum vestibulum
                           tincidunt convallis fusce commodo condimentum. Nam
                           class iaculis velit eget. Blandit eget a laoreet per
                           ut tellus seed massa ullamcorper tempus dapibus
                           primis tempor diam natoque tellus.
                        </p>

                        <ul className="my-4 grid gap-y-2 font-header text-sm font-extrabold uppercase text-default-black *:flex *:items-center *:gap-1 md:my-6 md:gap-y-3.5 lg:my-8 lg:gap-y-5 lg:text-base lg:*:gap-2 xl:my-10 xl:text-lg">
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Precision Repairs, Honest Service</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Driving Quality Repairs Home</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>
                                 Crafting Confidence One Repair at a Time
                              </span>
                           </li>
                        </ul>
                     </div>

                     <div className="article_p">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           our work process
                        </h3>
                        <p>
                           Diam nisad iaculis sociis massa auctors into duila
                           fringilla bibendum nostra mattis crased auctor dictum
                           vestibulum tincidunt convallis fusce commodo
                           condimentum
                        </p>
                     </div>
                     <Image
                        src="/images/image-66.png"
                        alt=""
                        width={850}
                        height={450}
                     />

                     <div className="article_p my-4 md:my-6 lg:my-10 xl:my-14">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           general questions
                        </h3>
                        <p>
                           Diam nisad iaculis sociis massa auctors into duila
                           fringilla bibendum nostra mattis crased auctor dictum
                           vestibulum tincidunt convallis fusce commodo
                           condimentum
                        </p>

                        <ServiceDetailsAccordion />
                     </div>
                  </article>
               </div>
            </div>
            <CtaSection />
         </main>
         <Footer />
      </>
   );
};

export default ServiceDetails;
