import Image from "next/image";

import { CtaSection } from "@/components/Home/CTA";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { ProjectInfo } from "@/components/Projects/ProjectInfo";
import { Separator } from "@/components/ui/separator";
import { project_info } from "@/lib/mock-data";
import { ScrollBarAnime } from "@/components/animations/scroll";

const ProjectDetails = () => {
   return (
      <>
         <Navbar isFixed />
         <main>
            <ScrollBarAnime />
            <PageLanding header="single project" title="Project Details" />
            <div className="container grid gap-2.5 py-9 font-header md:grid-cols-3 md:gap-4 md:py-[80px] lg:gap-6 lg:py-[120px] xl:gap-8 xl:py-[150px]">
               <div className="col-span-2 w-full px-2.5 md:col-span-1 xl:px-0">
                  <ProjectInfo {...project_info} />
               </div>
               <div className="col-span-2 px-2.5 xl:px-0">
                  <article>
                     <div className="article_p">
                        <Image
                           src="/images/image-38.png"
                           alt="service details"
                           width={870}
                           height={550}
                           className="mb-4 md:mb-6 lg:mb-8 xl:mb-10"
                        />

                        <h2 className="text-3xl font-black uppercase lg:text-4xl xl:text-5xl xl:leading-heavy">
                           engine repair
                        </h2>

                        <p>
                           Maecenas pellentesque elementum dictum aliquam
                           tincidunt elite augue aenean laoreet lacus an luctus
                           pulvinar vitae rhoncus ullamcorper facilisi pede
                           sociosqu eudu neque rhoncus dise porttitor mauris
                           suscipit proin platea magnis etiam aenean sodales
                           tempor dolor. Sed a cursus curae; interdum elite sem
                           laoreet sociis lacinia ornare nascetur molestie
                           scelerisque.
                        </p>
                        <p>
                           Elite augue aenean laoreet lacus an luctus pulvinar
                           vitae rhoncus ullamcorper facilisi pede sociosq eudu
                           neque rhoncus dise porttitor mauris suscipit proin
                           platea magnis etiam aenean sodales tempor cursus
                           curae; interdum elite sem laoreet sociis lacinia.
                        </p>
                     </div>

                     <div className="my-4 flex flex-col items-center justify-center gap-y-3 rounded-sm bg-tertiary bg-[url('/images/bg-3.svg')] px-3 py-3.5 md:my-7 md:px-6 md:py-6 lg:my-9 lg:gap-y-4 lg:px-10 lg:py-8 xl:my-11 xl:px-14 xl:py-10">
                        <p className="text-center font-header text-lg font-extrabold uppercase text-default-black">
                           Ullam corper taciti venenatis amet Justo nunc facilis
                           massa eleifend vitae Natoque Montes aliquam bibendum
                        </p>
                        <div className="flex items-center gap-x-1">
                           <Separator className="w-[25px] bg-default-tertiary" />
                           <span className="text-center font-body font-bold uppercase text-default-black">
                              Caitlin T. Leavell
                           </span>
                           <Separator className="w-[25px] bg-default-tertiary" />
                        </div>
                     </div>

                     <div className="article_p">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           feature of project
                        </h3>
                        <p>
                           Lacus nullam sapien ultrices aliquam magna nunc
                           aptent taciti neque into quam tempor bibendum lacus
                           ullamcorper faucibus parturient neque tempus
                           vulputate molestie
                        </p>

                        <ul className="mt-4 grid grid-cols-2 gap-2 font-header text-sm font-extrabold uppercase text-default-black *:flex *:items-center *:gap-1 md:mt-6 md:gap-3 lg:mt-8 lg:gap-4 lg:text-base lg:*:gap-2 xl:mt-10 xl:gap-5 xl:text-lg">
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Online appointment scheduling</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Emergency roadside assistance</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Quick turnaround times</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Online service history</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Shuttle service or loaner</span>
                           </li>
                           <li>
                              <Image
                                 src="/images/icon-1.png"
                                 width={22}
                                 height={17}
                                 alt="remark"
                              />
                              <span>Online appointment scheduling</span>
                           </li>
                        </ul>
                     </div>

                     <Image
                        src="/images/image-66.png"
                        alt=""
                        width={850}
                        height={450}
                        className="my-3.5 md:my-7 lg:my-10 xl:my-14"
                     />

                     <div className="article_p">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           Exceeding Expectations
                        </h3>
                        <p>
                           Litora nisl pharetra suscipit egestas tristique
                           vulputate venenatis lacus nullam sapien ultrices
                           aliquam magna nunc aptent taciti neque quam tempor
                           bibendum lacus ullamcorper faucibus parturient neque
                           per tempus nisle vulputate molestie quisque.
                           Ridiculus rhoncus
                        </p>
                     </div>

                     <div className="grid grid-cols-2 gap-x-3 md:gap-x-5 lg:gap-x-7">
                        <Image
                           src="/images/image-40.png"
                           alt=""
                           width={420}
                           height={350}
                        />
                        <Image
                           src="/images/image-41.png"
                           alt=""
                           width={420}
                           height={350}
                        />
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

export default ProjectDetails;
