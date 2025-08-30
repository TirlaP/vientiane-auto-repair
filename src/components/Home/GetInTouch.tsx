import Image from "next/image";

import { GetInTouchForm } from "@/components/Home/GetInTouchForm";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/components/animations/motion";

interface GetInTouchSectionProps {
   isPage?: boolean;
}

const GetInTouchSection = ({ isPage }: GetInTouchSectionProps) => {
   return (
      <section
         className={cn(
            "max-h-[990px] overflow-hidden bg-cover font-header",
            isPage
               ? "bg-white"
               : "bg-background-dark bg-[url('/images/bg-1.svg')] 2xl:pt-28",
         )}
      >
         <div className="mx-auto flex w-full gap-x-5 bg-primary bg-[url('/images/bg-2.svg')] bg-cover py-9 lg:py-0 xl:h-[840px] xl:max-w-[1520px]">
            <MotionDiv
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: -200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="hidden w-full items-end justify-evenly pt-8 lg:flex lg:w-1/2"
            >
               <Image
                  src="/images/image-22.png"
                  alt="get in touch"
                  width={520}
                  height={805}
               />
            </MotionDiv>

            <GetInTouchForm />
         </div>
      </section>
   );
};

export default GetInTouchSection;
