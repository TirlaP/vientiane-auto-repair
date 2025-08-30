import { type blog3Data } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon, CopyIcon, RightArrowIcon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

type BlogDataType = (typeof blog3Data)[0];
interface BlogCardType extends BlogDataType {
   isCenter?: boolean;
   index: number;
}

const BlogCard = ({ desc, id, img, title, isCenter, index }: BlogCardType) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               y: -40,
            },
            onscreen: {
               opacity: 1,
               y: 0,
               transition: {
                  duration: 0.5,
                  delay: index * 0.1,
               },
            },
         }}
         className={cn(
            "mx-auto max-w-[420px]",
            isCenter ? "col-span-1 md:col-span-2 lg:col-span-1" : "",
         )}
      >
         <div className="relative">
            <Image
               src={`/images/${img}`}
               alt={title}
               width={420}
               height={326}
            />
            <div className="absolute bottom-0 left-1/2 flex h-[60px] w-[300px] -translate-x-1/2 translate-y-1/2 items-center justify-center gap-x-5 bg-white font-body text-[15px] font-bold uppercase text-default-tertiary shadow-sm">
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: {
                        opacity: 0,
                        y: 20,
                     },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: {
                           duration: 0.5,
                           delay: 0.1,
                        },
                     },
                  }}
                  className="flex items-center gap-x-2"
               >
                  <CopyIcon className="h-5 w-4 fill-primary" />{" "}
                  <span>repair</span>
               </MotionDiv>
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: {
                        opacity: 0,
                        y: 20,
                     },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: {
                           duration: 0.5,
                           delay: 0.13,
                        },
                     },
                  }}
                  className="flex items-center gap-x-2"
               >
                  <ChatIcon className="h-5 w-4 fill-primary" />{" "}
                  <span>comment (02)</span>
               </MotionDiv>
            </div>
         </div>
         <div className="mt-[60px] flex flex-col place-content-center">
            <h3 className="text-center text-xl font-extrabold uppercase text-default-black lg:text-2xl lg:leading-[34px]">
               {title}
            </h3>
            <p className="mt-3 text-center font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
               {desc}
            </p>

            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     scale: 0,
                  },
                  onscreen: {
                     opacity: 1,
                     scale: 1,
                     transition: {
                        duration: 0.5,
                        delay: 0.1,
                     },
                  },
               }}
               className="mx-auto mt-3 lg:mt-[30px]"
            >
               <Link
                  href={`/blog/${id}`}
                  className="group flex items-center gap-x-2 text-[13px] font-extrabold uppercase text-default-tertiary hover:text-primary"
               >
                  <span>read more</span>
                  <RightArrowIcon className="fill-default-tertiary group-hover:fill-primary" />
               </Link>
            </MotionDiv>
         </div>
      </MotionDiv>
   );
};

export { BlogCard };
