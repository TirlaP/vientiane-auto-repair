"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";

import { Logo } from "@/components/Home2/Logo";
import { ResponsiveNavbar } from "@/components/ResponsiveNavbar";
import { Button } from "@/components/ui/button";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
   CartIcon,
   EmailInbox2Icon,
   EnergyIcon,
   MapsIcon,
   RightArrowIcon,
   SearchIcon,
} from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Navbar = () => {
   const pathname = usePathname();

   return (
      <nav className="navbar2-h sticky left-0 top-0 z-50 bg-background-dark font-header text-white">
         <div className="container max-w-[--container-2] px-5 py-2">
            <motion.div
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, y: -20 },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="hidden h-full items-center justify-between font-body md:flex"
            >
               <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-x-2">
                     <EnergyIcon className="fill-tertiary" />
                     <p className="text-base font-medium leading-5">
                        No Hidden Charges Apply
                     </p>
                  </div>
                  <Separator
                     className="h-6 w-[2px] bg-[#DBDEE3]"
                     orientation="vertical"
                  />
                  <div className="flex items-center gap-x-2">
                     <EnergyIcon className="fill-tertiary" />
                     <p className="text-base font-medium leading-5">
                        +00 (252) 2653 250
                     </p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-x-2">
                     <EmailInbox2Icon className="fill-tertiary" />
                     <Link
                        href="mailto:info@autofix.com"
                        className="text-base font-medium leading-5"
                     >
                        info@autofix.com
                     </Link>
                  </div>
                  <Separator
                     className="h-6 w-[2px] bg-[#DBDEE3]"
                     orientation="vertical"
                  />
                  <div className="flex items-center gap-x-2">
                     <MapsIcon className="h-[20px] w-[22px] fill-tertiary" />
                     <Link
                        href="https://maps.app.goo.gl/sapfa1N5thyUKAFXA"
                        rel="external"
                        target="_blank"
                        className="text-base font-medium leading-5"
                     >
                        Find Us On Map
                     </Link>
                  </div>
               </div>
            </motion.div>

            <div className="flex h-full items-center justify-between py-2 font-body">
               <Logo />

               <div className="hidden font-header text-sm font-bold leading-4 lg:flex lg:font-extrabold">
                  <motion.ul
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     className="navbar-list__container flex items-center uppercase lg:gap-x-5 xl:gap-x-10"
                  >
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -20 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <HoverCard openDelay={20} closeDelay={10}>
                           <HoverCardTrigger asChild>
                              <Link
                                 href="/"
                                 style={{ display: "flex", gap: "3px" }}
                              >
                                 <span>home</span>
                                 <LuChevronDown className="size-4" />
                              </Link>
                           </HoverCardTrigger>
                           <HoverCardContent className="z-50 mt-1.5 w-32 rounded-sm border-primary bg-black/80 text-white shadow backdrop-blur">
                              <div>
                                 <ul className="grid space-y-2">
                                    <li>
                                       <Link href="/">Home 1</Link>
                                    </li>
                                    <li>
                                       <Link href="/home2">Home 2</Link>
                                    </li>
                                    <li>
                                       <Link href="/home3">Home 3</Link>
                                    </li>
                                 </ul>
                              </div>
                           </HoverCardContent>
                        </HoverCard>
                     </motion.li>

                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -50 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.1 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/services"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/services">SERVICES</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -50 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.15 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/projects"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/projects">PROJECTS</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -50 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.2 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/pricing"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/pricing">pricing</Link>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -50 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.25 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/blogs"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <HoverCard openDelay={20} closeDelay={10}>
                           <HoverCardTrigger asChild>
                              <Link
                                 href="/blogs"
                                 style={{ display: "flex", gap: "3px" }}
                              >
                                 <span>pages</span>
                                 <LuChevronDown className="size-4" />
                              </Link>
                           </HoverCardTrigger>
                           <HoverCardContent
                              className={cn(
                                 "z-50 mt-1.5 w-auto rounded-sm border-primary bg-black/80 text-white backdrop-blur",
                              )}
                           >
                              <div>
                                 <ul className="grid space-y-2">
                                    <li>
                                       <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                       <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                       <Link href="/services/serviceId">
                                          Service Details
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/teams">Teams</Link>
                                    </li>
                                    <li>
                                       <Link href="/projects">Projects</Link>
                                    </li>
                                    <li>
                                       <Link href="/projects/projectId">
                                          Project Details
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/pricing">Pricing</Link>
                                    </li>
                                    <li>
                                       <Link href="/faqs">FAQs</Link>
                                    </li>
                                    <li>
                                       <Link href="/blogs">Blogs</Link>
                                    </li>
                                    <li>
                                       <Link href="/blogs/blogId">
                                          Blog Details
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/contact">Contact</Link>
                                    </li>
                                 </ul>
                              </div>
                           </HoverCardContent>
                        </HoverCard>
                     </motion.li>
                     <motion.li
                        variants={{
                           offscreen: { opacity: 0, y: -50 },
                           onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.3 },
                           },
                        }}
                        className={cn(
                           `${
                              pathname === "/contact"
                                 ? "cursor-pointer text-tertiary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/contact">CONTACT</Link>
                     </motion.li>
                  </motion.ul>
               </div>

               <motion.div
                  variants={{
                     offscreen: { opacity: 0, y: -20 },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.15 },
                     },
                  }}
                  className="flex h-14 items-center gap-x-3 text-default md:gap-x-6 lg:gap-x-8"
               >
                  <div className="flex items-center gap-x-2 md:gap-x-4">
                     <Link href="/cart">
                        <CartIcon className="h-4 w-4 fill-white md:h-6 md:w-6" />
                     </Link>
                     <Separator
                        orientation="vertical"
                        className="h-5 w-px bg-white opacity-100 md:h-6"
                     />
                     <Link href="/search">
                        <SearchIcon className="h-4 w-4 fill-white md:h-6 md:w-6" />
                     </Link>
                  </div>

                  <div className="flex items-center gap-x-3 font-header">
                     <Button
                        size="skewBig"
                        variant="skewBig"
                        className="hidden xl:mr-1.5 xl:flex"
                     >
                        <span>GET QUOTE</span>
                        <RightArrowIcon className="fill-white" />
                     </Button>

                     <ResponsiveNavbar />
                  </div>
               </motion.div>
            </div>
         </div>
      </nav>
   );
};

export { Navbar };

