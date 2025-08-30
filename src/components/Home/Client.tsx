import Image from "next/image";

import { MotionDiv } from "../animations/motion";

const ClientSection = () => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         className="overflow-hidden bg-primary"
      >
         <div className="container flex max-w-[1720px] flex-wrap items-center justify-center gap-5 px-5 py-8 *:w-16 *:cursor-pointer sm:flex-nowrap sm:justify-between sm:gap-0 md:py-20 *:md:w-full lg:px-0">
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, y: -200 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex items-center justify-center"
            >
               <Image
                  src="/images/client-1.png"
                  width={200}
                  height={100}
                  alt="Liberty Auto SLC"
               />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, y: 200 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex items-center justify-center"
            >
               <Image
                  src="/images/client-2.png"
                  width={80}
                  height={50}
                  alt="Liberty Auto SLC"
               />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, y: -200 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex items-center justify-center"
            >
               <Image
                  src="/images/client-3.png"
                  width={100}
                  height={60}
                  alt="Liberty Auto SLC"
               />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, y: 200 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex items-center justify-center"
            >
               <Image
                  src="/images/client-4.png"
                  width={200}
                  height={100}
                  alt="Liberty Auto SLC"
               />
            </MotionDiv>
            <MotionDiv
               variants={{
                  offscreen: { opacity: 0, y: -200 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="flex items-center justify-center"
            >
               <Image
                  src="/images/client-5.png"
                  width={100}
                  height={60}
                  alt="Liberty Auto SLC"
               />
            </MotionDiv>
         </div>
      </MotionDiv>
   );
};

export { ClientSection };
