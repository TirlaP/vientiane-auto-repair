import { Logo as Logo1 } from "../Logo";
import { MotionDiv } from "@/components/animations/motion";

const Logo = () => (
   <MotionDiv
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={{
         offscreen: { opacity: 0, x: -50 },
         onscreen: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
         },
      }}
      className="flex h-[61px] w-[198px] skew-x-12 items-center justify-center rounded-sm bg-background-darkSecondary *:block  md:h-[81px] md:w-[264px]"
   >
      <Logo1 />
   </MotionDiv>
);

export { Logo };
