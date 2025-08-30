import Link from "next/link";

import {
   BeIcon,
   FacebookIcon,
   InstagramIcon,
   TwitterIcon,
} from "@/components/ui/icons";

const SocialLogo2 = () => {
   return (
      <div className="flex items-center gap-x-1.5 md:gap-x-[10px]">
         <Link
            href="#"
            target="_blank"
            className="group flex h-[33px] w-[33px] items-center justify-center rounded-lg bg-[#4A4D53] transition-all duration-200 hover:bg-primary md:h-[42px] md:w-[42px]"
         >
            <FacebookIcon className="h-3.5 w-3.5 fill-white md:h-5 md:w-5" />
         </Link>
         <Link
            href="#"
            target="_blank"
            className="group flex h-[33px] w-[33px] items-center justify-center rounded-lg bg-[#4A4D53] transition-all duration-200 hover:bg-primary md:h-[42px] md:w-[42px]"
         >
            <TwitterIcon className="h-3.5 w-3.5 fill-white md:h-5 md:w-5" />
         </Link>
         <Link
            href="#"
            target="_blank"
            className="group flex h-[33px] w-[33px] items-center justify-center rounded-lg bg-[#4A4D53] transition-all duration-200 hover:bg-primary md:h-[42px] md:w-[42px]"
         >
            <InstagramIcon className="h-3.5 w-3.5 fill-white md:h-5 md:w-5" />
         </Link>
         <Link
            href="#"
            target="_blank"
            className="group flex h-[33px] w-[33px] items-center justify-center rounded-lg bg-[#4A4D53] transition-all duration-200 hover:bg-primary md:h-[42px] md:w-[42px]"
         >
            <BeIcon className="h-3.5 w-3.5 fill-white md:h-5 md:w-5" />
         </Link>
      </div>
   );
};

export { SocialLogo2 };
