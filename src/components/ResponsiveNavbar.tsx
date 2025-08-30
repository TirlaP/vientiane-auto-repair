import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { DialPadIcon } from "@/components/ui/icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const ResponsiveNavbar = () => {
   const pathname = usePathname();

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button
               variant="skew"
               className="!h-[48px] !w-[48px] bg-slate-500/50 hover:bg-slate-500/60 xl:!h-[60px] xl:!w-[60px]"
               size="icon"
               aria-label="Open Menu"
            >
               <DialPadIcon className="h-5 w-5 xl:h-6 xl:w-6" />
            </Button>
         </SheetTrigger>
         <SheetContent side="right">
            <div className="grid gap-6 p-2.5 font-header md:p-4">
               <div className="w-full rounded-sm bg-background-dark px-3 py-4">
                  <Link
                     href="/"
                     className="flex items-center gap-2"
                     prefetch={false}
                  >
                     <Logo />
                  </Link>
               </div>
               <nav className="grid gap-4">
                  <Link
                     href="/"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     Home
                  </Link>
                  <Link
                     href="/services"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/services"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     Services
                  </Link>
                  <Link
                     href="/about"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/about"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     About
                  </Link>
                  <Link
                     href="/teams"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/teams"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     Team
                  </Link>
                  <Link
                     href="/faqs"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/faqs"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     FAQs
                  </Link>
                  <Link
                     href="/contact"
                     className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-all duration-75 hover:text-tertiary hover:underline hover:underline-offset-4",
                        pathname === "/contact"
                           ? "text-tertiary"
                           : "text-default-black",
                     )}
                     prefetch={false}
                  >
                     Contact
                  </Link>
               </nav>
            </div>
         </SheetContent>
      </Sheet>
   );
};

export { ResponsiveNavbar };

