import { blog2Data } from "@/lib/mock-data";
import { BlogCard } from "./BlogCard";
import { MotionH2, MotionP } from "../animations/motion";

const Blogs = () => {
   return (
      <section className="px-5 pb-[150px] pt-6 font-header md:pt-[50px] lg:pt-[100px] xl:px-0 xl:pb-[225px] xl:pt-[150px]">
         <div className="container flex flex-col items-center justify-center gap-y-2 md:gap-y-3 lg:gap-y-4">
            <MotionP
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: -100,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
               className="relative z-10 mb-1 text-sm font-extrabold uppercase text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-base lg:mb-4 lg:leading-6"
            >
               latest article
            </MotionP>

            <MotionH2
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: 100,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
               className="text-center text-2xl font-black uppercase lg:text-3xl lg:leading-heavy xl:text-5xl"
            >
               recent article <br />
               and stories
            </MotionH2>

            <div className="mt-4 md:mt-7 lg:mt-10 xl:mt-14">
               <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
                  {blog2Data.map((blog, index) => (
                     <BlogCard {...blog} key={blog.id} index={index} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export { Blogs };
