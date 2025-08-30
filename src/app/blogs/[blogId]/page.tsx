import Image from "next/image";

import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { SearchCard } from "@/components/SearchCard";
import { SidebarList } from "@/components/SidebarList";
import { Separator } from "@/components/ui/separator";
import { DateCard } from "@/components/DateCard";
import { ChatIcon, CopyIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LeaveComment } from "@/components/LeaveComment";
import { BlogCard2 } from "@/components/Blogs/BlogCard2";
import {
   blog_details_list,
   blog_details_tags,
   blogs_2_data,
   services_list,
} from "@/lib/mock-data";
import { ScrollBarAnime } from "@/components/animations/scroll";

const BlogDetails = () => {
   return (
      <>
         <Navbar isFixed />
         <main className="w-full overflow-hidden">
            <ScrollBarAnime />
            <PageLanding header="Blog Details" title="Single Blog" />
            <section className="container grid grid-cols-2 gap-x-2.5 py-9 md:grid-cols-3 md:py-[80px] lg:gap-x-4 lg:py-[120px] xl:gap-x-7 xl:py-[150px]">
               <div className="col-span-2 grid gap-y-10">
                  <article className="px-3.5 xl:px-0">
                     <div className="article_p">
                        <div className="relative mb-5 lg:mb-8">
                           <Image
                              src="/images/image-10.png"
                              alt="service details"
                              width={870}
                              height={520}
                              className="object-cover"
                           />
                           <DateCard
                              isRotate
                              date="22 march"
                              className="absolute left-0 top-1/2 ml-5 -translate-x-1/2"
                           />
                        </div>

                        <div className="mb-2.5 flex items-center gap-x-2.5 bg-white font-body text-[13px] font-bold uppercase text-default-tertiary lg:mb-4 lg:gap-x-5 lg:text-[15px]">
                           <div className="flex items-center gap-x-1 lg:gap-x-2">
                              <CopyIcon className="h-3.5 w-3.5 fill-primary lg:h-5 lg:w-4" />
                              <span>repair</span>
                           </div>
                           <div className="flex items-center gap-x-1 lg:gap-x-2">
                              <ChatIcon className="h-3.5 w-3.5 fill-primary lg:h-5 lg:w-4" />
                              <span>comment (02)</span>
                           </div>
                        </div>

                        <h2 className="font-header text-3xl font-black uppercase lg:text-4xl xl:text-5xl xl:leading-heavy">
                           Quam mais montes faucibu Semper condimen
                        </h2>

                        <p>
                           Dictumst placerat to dolora tincidunt crase
                           pellentesque pretium ridiculus egestas mauris ornare
                           fusce nostra ipsum phasellus inceptos dui tellus
                           mauris. Viverra convallis nullam massa mauris
                           nascetur alique semper venenatis netus sodales
                           eleifend diam molestie dignissim venenatis molestie
                           tempus quis est mattis integer varius porta pharetra
                           feugiat commodo iaculis velit. Viverra a ultricies
                           tristique nonummy pede montes. Dapibus sagittis
                           laoreet aptent scelerisque lacus
                        </p>
                        <p>
                           Ridiculus egestas mauris ornare fusce nostra ipsum
                           phasellus inceptos dui tellus mauris viverra
                           convallis nullam massa mauris nascetur alique semper
                           venenatis netus sodales eleifend diam molestie
                           dignissim venenatis molestie tempus quis estab mattis
                           integer varius porta pharetra feugiat commodo iaculis
                           velit viverra a ultricies tristique nonummy pede
                           montes.
                        </p>
                     </div>

                     <div className="article_p">
                        <h2 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           Building Relationships
                        </h2>
                        <p>
                           Semper convallis ultrices pretium, aenean cras magna
                           ullamcorper venenatis velit potenti pharetra taciti
                           proin duis tincidunt curabitur justo euismod duila
                           lacinia duis mollis in curae in tempus pellentesque
                           facilisis tempor consequat diam imperdiet pretium.
                           Lectus etiam lacinia sociis eget senectus nisl nullam
                           rutrum nascetur penatibus scelerisque laoreet taciti
                           fusce. Arcu felis feugiat fermentum form of rhoncus
                           semper senectus congue porta a pretium neque lectus.
                        </p>

                        <div className="my-5 grid grid-cols-1 gap-8 lg:my-9 lg:grid-cols-2">
                           <Image
                              src="/images/image-11.png"
                              width={420}
                              height={310}
                              alt=""
                              className="h-auto w-full"
                           />
                           <div className="grid gap-y-2.5 lg:gap-y-5">
                              <h4 className="font-header text-xl font-extrabold uppercase text-default-black lg:text-2xl">
                                 Crafting Solutions Driving Satisfaction
                              </h4>
                              <p className="overflow-hidden font-body text-lg font-normal text-default-tertiary">
                                 Pretium cursus nonummy integer nostra facilisi
                                 lectus cume maecenas rutrum, nascetur eleifend
                                 dise rhoncus curae aenean duie eget adstel
                                 libero faucibus etiam montes facilisis aliquet.
                              </p>
                              <p className="overflow-hidden font-body text-lg font-normal text-default-tertiary">
                                 Cursus nonummy integer nostra no facilisi
                                 lectus cume maecenas rutrum nascetur eleifend
                                 disew rhoncus curae aenean duie
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="article_p my-5 md:my-8 lg:my-11 xl:my-[60px]">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           Drive and Repairs Thrive
                        </h3>
                        <p>
                           Posuere odio turpis curabitur etiam mollis ad blandit
                           eud pretium magnis urna venenatis erate venenatis
                           gravida primis mattis malesuada etiam interdum ligula
                           lorem vestibulum libero a molestie lacinia blandit
                           nulla ultrices pulvinar quam euismod amet aliquam
                           cursus is imperdiet enim varius quisque hymenaeos
                           cubilia nunc massa senectus auctor eros torquent.
                           Proin mauris rhoncus ultricies. Nostra donec arcu
                           tris consectetuer nonummy neque. Fermentum rutrum
                           platea tacitie platea non massa eros praesent sapien
                           tempor felis commodo erate false betise reliable
                           pretium
                        </p>
                     </div>

                     <div className="my-4 flex flex-col items-center justify-center gap-y-3 rounded-sm bg-tertiary bg-[url('/images/bg-3.svg')] px-4 py-4 md:my-6 md:px-6 md:py-6 lg:my-9 lg:gap-y-4 lg:px-10 lg:py-10 xl:my-11 xl:px-14">
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

                     <div className="article_p my-5 md:my-8 lg:my-11 xl:my-[60px]">
                        <p>
                           Pretium magnis urna venenatis erate venenatis gravida
                           primis mattis malesuada etiam interdum ligula lorem
                           vestibulum libero a molestie lacinia blandit nulla
                           ultrices pulvinar quam euismod amet aliquam cursus is
                           imperdiet enim varius quisque hymenaeos cubilia nunc
                           massa senectus auctor eros torquent. Proin mauris
                           rhoncus ultricies nostra donec arcu tris consectetuer
                        </p>
                     </div>

                     <div className="article_p mb-10">
                        <h3 className="font-header text-2xl font-extrabold uppercase text-default-black lg:text-4xl">
                           Experience the Difference
                        </h3>
                        <p>
                           Libero a molestie lacinia blandit nulla ultrices
                           pulvinar quam euismod amet aliquam cursus is
                           imperdiet enim varius quisqu hymenaeos cubilia nunc
                           massa senectus auctor eros torquent proin mauris
                           rhoncus ultricies. Nostra donec arcu tris
                           consectetuer nonummy neque. Fermentum rutrum platea
                           tacitie platea none massa eros praesent sapien tempor
                           felis commodo
                        </p>
                        <div className="grid grid-cols-2 items-center gap-x-3">
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
                        <p className="pt-2.5 lg:pt-5">
                           Pulvinar quam euismod amet aliquam cursus is
                           imperdiet enim varius quisqu hymenaeos cubilia nunce
                           massa senectus auctor eros torquent proin mauris
                           rhoncus ultricies. Nostra donec arcu trise consec
                           tetuer nonummy neque. Fermentum rutrum platea tacitie
                           platea none massa erosent praesent sapien tempor
                           felis commodo sem non primis vulputate nostra
                           integer.
                        </p>

                        <ul>
                           {blog_details_list.map((d) => (
                              <li
                                 key={d}
                                 className="my-2 flex gap-x-1 lg:my-5 lg:gap-x-2"
                              >
                                 <div className="my-auto h-2 w-2 rounded-full bg-default-tertiary" />
                                 <span>{d}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <Separator />

                     <div className="flex items-center py-3 lg:py-5 xl:py-7">
                        <span className="font-body text-lg text-default-black">
                           Tags:{" "}
                        </span>
                        {blog_details_tags.map((t) => (
                           <Badge
                              variant="outline"
                              className="mx-1 font-body text-sm font-normal uppercase text-default-tertiary lg:font-medium"
                              key={t}
                           >
                              {t}
                           </Badge>
                        ))}
                     </div>

                     <Card className="flex flex-col gap-x-2.5 p-4 sm:flex-row md:gap-x-5 lg:items-center lg:gap-x-7">
                        <Image
                           src="/images/image-67.png"
                           alt=""
                           width={200}
                           height={200}
                           className="h-[150px] w-[150px] rounded lg:h-[200px] lg:w-[200px]"
                        />

                        <div className="grid gap-y-1.5 md:gap-y-3">
                           <h5 className="font-header text-base font-extrabold uppercase text-default-black lg:text-lg">
                              emiko buerger
                           </h5>
                           <span className="font-body text-sm font-normal uppercase text-default-tertiary lg:font-medium">
                              about author
                           </span>
                           <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
                              Sociosqu orcid convallis site ver phasellus metus
                              congue ultricies elite inep consectetuer orci
                              vehicula mauris tortor enim inceptos suspense
                              phasellus netus dolor the fusce tempor
                           </p>
                        </div>
                     </Card>
                  </article>

                  <div className="max-w-full">
                     <h3 className="px-2.5 font-header text-xl font-extrabold uppercase text-default-black lg:text-3xl xl:px-0">
                        leave a reply
                     </h3>

                     <LeaveComment />
                  </div>

                  <div>
                     <h4 className="font-header text-xl font-extrabold uppercase text-default-black lg:text-3xl">
                        related articles
                     </h4>

                     <div className="my-3.5 grid grid-cols-2 gap-3 md:my-6 md:gap-4 lg:my-8 lg:gap-6 xl:gap-8">
                        {blogs_2_data.map((b) => (
                           <BlogCard2 key={b.id} {...b} />
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-span-2 md:col-span-1">
                  <div className="grid gap-y-2.5 lg:gap-y-4 xl:gap-y-8">
                     <div className="hidden w-full md:block">
                        <SearchCard />
                     </div>

                     <SidebarList
                        listItem={services_list}
                        name="category"
                        active={2}
                     />
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </>
   );
};

export default BlogDetails;
