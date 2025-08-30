import { cn } from "@/lib/utils";
import Image from "next/image";
import { MotionDiv } from "../animations/motion";

interface FeatureCardProps {
   i: number;
   title: string;
   desc: string;
   icon: string;
   index: number;
}

const FeatureCard = ({ desc, i, icon, title, index }: FeatureCardProps) => {
   return (
      // prettier-ignore
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0 },
            onscreen: {
               opacity: 1,
               transition: { duration: 0.5, delay:0.25 * index },
            },
         }}
         className={cn(
            "flex flex-col items-center justify-center gap-y-1 border-[#D9D9D9] border-opacity-20 p-6 font-header md:px-6 md:py-10 xl:gap-y-4 xl:p-12",
            i === 1
               ? "border-b border-r"
               : i === 2
                  ? "border-b"
                  : i === 3
                     ? "border-r"
                     : "",
         )}
      >
         <Image
            src={`/images/${icon}`}
            alt="Who"
            width={80}
            height={70}
            quality={80}
            className="mb-1.5 h-[52px] w-[52px] lg:h-[70px] lg:w-[80px] xl:mb-5"
         />
         <h4 className="text-center text-base font-extrabold uppercase text-default xl:text-2xl xl:leading-6">
            {title}
         </h4>
         <p className="text-center font-body text-sm text-default-foreground xl:text-lg xl:leading-7">
            {desc}
         </p>
      </MotionDiv>
   );
};

export { FeatureCard };
