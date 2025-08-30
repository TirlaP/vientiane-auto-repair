import Link from "next/link";

import {
   BeIcon,
   FacebookIcon,
   InstagramIcon,
   TwitterIcon,
} from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface LinkProps {
   isRotate?: boolean;
}

const SocialLogo = ({ isRotate }: LinkProps) => {
   return (
      <div
         className={cn("flex items-center gap-x-2", { "-rotate-90": isRotate })}
      >
         <Link
            href="#"
            target="_blank"
            className="group"
         >
            <FacebookIcon
               className={cn(
                  "h-[25px] w-5 fill-default-foreground transition-all duration-200 group-hover:fill-tertiary",
                  { "rotate-90": isRotate },
               )}
            />
         </Link>
         <Separator className="w-5" />
         <Link
            href="#"
            target="_blank"
            className="group"
         >
            <TwitterIcon
               className={cn(
                  "h-[25px] w-5 fill-default-foreground transition-all duration-200 group-hover:fill-tertiary",
                  { "rotate-90": isRotate },
               )}
            />
         </Link>
         <Separator className="w-5" />
         <Link
            href="#"
            target="_blank"
            className="group"
         >
            <InstagramIcon
               className={cn(
                  "h-[25px] w-5 fill-default-foreground transition-all duration-200 group-hover:fill-tertiary",
                  { "rotate-90": isRotate },
               )}
            />
         </Link>
         <Separator className="w-5" />
         <Link
            href="#"
            target="_blank"
            className="group"
         >
            <BeIcon
               className={cn(
                  "h-[25px] w-5 fill-default-foreground transition-all duration-200 group-hover:fill-tertiary",
                  { "rotate-90": isRotate },
               )}
            />
         </Link>
      </div>
   );
};

export { SocialLogo };
