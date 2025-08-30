"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { RightArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { ResponsiveNavbar } from "@/components/ResponsiveNavbar";
import { MotionLogo } from "@/components/animations/motion";

interface NavbarProps {
   isFixed?: boolean;
}

export const onscreen = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const Navbar = ({ isFixed }: NavbarProps) => {
   const pathname = usePathname();

   return (
      <motion.nav
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         className={cn(
            "navbar-h z-50 flex w-full items-center justify-between bg-black/10 backdrop-blur",
            isFixed
               ? "fixed left-1/2 top-0 mx-auto -translate-x-1/2"
               : "sticky top-0",
         )}
      >
         <div
            className={cn(
               "container flex h-full max-w-[1720px] items-center justify-between px-5 text-default 2xl:px-0",
            )}
         >
            <div className="flex h-14 items-center gap-x-2 lg:gap-x-12 xl:gap-x-24">
               <MotionLogo
                  variants={{
                     offscreen: { opacity: 0, y: -100 },
                     onscreen,
                  }}
               />

               <div className="offscreen hidden font-header font-bold leading-4 lg:flex lg:font-extrabold">
                  <ul className="navbar-list__container flex items-center text-xs uppercase lg:gap-x-2.5 xl:gap-x-5 xl:text-sm 2xl:gap-x-10">
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.1,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn({
                           "navbar2-active__1": pathname === "/",
                        })}
                     >
                        <Link href="/">HOME</Link>
                     </motion.li>

                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.15,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn(
                           `${pathname === "/services" ? "navbar2-active__1" : ""}`,
                        )}
                     >
                        <Link href="/services">SERVICES</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.2,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn(
                           `${pathname === "/about" ? "navbar2-active__1" : ""}`,
                        )}
                     >
                        <Link href="/about">ABOUT</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.25,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn(
                           `${pathname === "/teams" ? "navbar2-active__1" : ""}`,
                        )}
                     >
                        <Link href="/teams">TEAM</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.3,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn(
                           `${pathname === "/faqs" ? "navbar2-active__1" : ""}`,
                        )}
                     >
                        <Link href="/faqs">FAQS</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -100 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 duration: 0.5,
                                 delay: 0.35,
                                 bounce: 0.25,
                                 type: "spring",
                              },
                           },
                        }}
                        className={cn(
                           `${pathname === "/contact" ? "navbar2-active__1" : ""}`,
                        )}
                     >
                        <Link href="/contact">CONTACT</Link>
                     </motion.li>
                  </ul>
               </div>
            </div>
            <div className="flex h-14 items-center gap-x-3 text-default md:gap-x-6 lg:gap-x-8">

               <motion.div
                  variants={{
                     offscreen: { opacity: 0, y: -100 },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: {
                           duration: 0.5,
                           delay: 0.45,
                           bounce: 0.25,
                           type: "spring",
                        },
                     },
                  }}
                  className="flex items-center gap-x-3 font-header"
               >
                  <Button
                     variant="skewBig"
                     size="skewBig"
                     className="offscreen hidden sm:flex lg:hidden xl:mr-1.5 xl:flex"
                  >
                     <span>GET QUOTE</span>
                     <RightArrowIcon className="fill-white" />
                  </Button>

                  <ResponsiveNavbar />
               </motion.div>
            </div>
         </div>
      </motion.nav>
   );
};

export { Navbar };
