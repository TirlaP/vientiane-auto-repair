import { blog3Data } from "@/lib/mock-data";
import { BlogCard } from "./BlogCard";
import { MotionH2, MotionP } from "../animations/motion";

const Blogs = () => {
   return (
      <section className="py-9 md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="container flex flex-col items-center justify-center font-header">
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
               className="relative z-10 text-center text-base font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-lg"
            >
               recent articles
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
               className="mt-3.5 text-center text-3xl font-black uppercase md:mt-4 lg:text-4xl xl:text-5xl xl:leading-heavy"
            >
               latest repair story <br /> from journal
            </MotionH2>

            <div className="mt-5 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-6 lg:mt-11 lg:grid-cols-3 lg:gap-[30px] xl:mt-[60px]">
               {blog3Data.map((blog, i) => (
                  <BlogCard
                     key={blog.id}
                     {...blog}
                     isCenter={(i + 1) % 2 !== 0 && i === blog3Data.length - 1}
                     index={i}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { Blogs };
