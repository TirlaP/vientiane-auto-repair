import { blogs1_data } from "@/lib/mock-data";
import { BlogCard } from "./BlogCard";
import { MotionDiv, MotionH2 } from "../animations/motion";

const BlogSection = () => {
   return (
      <section className="overflow-hidden bg-background-dark bg-[url('/images/bg-1.svg')] bg-cover py-14 font-header md:py-24 lg:py-[150px]">
         <div className="container flex flex-col items-center justify-center">
            <MotionDiv
               className="mb-5"
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
            >
               <p className="-skew-x-12 rounded bg-tertiary px-5 py-1 text-center text-base font-extrabold uppercase leading-snug text-black *:block *:skew-x-12">
                  <span>OUR article</span>
               </p>
            </MotionDiv>

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
               className="text-center text-[40px] font-black uppercase leading-[50px] text-default md:text-[60px] md:leading-[70px]"
            >
               recent updated <br />
               articles
            </MotionH2>

            <div className="my-5 grid w-full grid-cols-1 gap-5 px-5 md:my-8 md:grid-cols-2 lg:grid-cols-1 xl:px-0">
               {blogs1_data.map((x, index) => (
                  <BlogCard
                     key={x.id}
                     {...x}
                     isCenter={
                        (index + 1) % 2 !== 0 &&
                        index === blogs1_data.length - 1
                     }
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { BlogSection };
