"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";

import { Logo } from "@/components/Logo";
import { ResponsiveNavbar } from "@/components/ResponsiveNavbar";
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
import { MotionLink } from "../animations/motion";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "../ui/hover-card";

const Navbar = () => {
   const pathname = usePathname();

   return (
      <nav className="z-50 flex h-[--navbar-3] w-full items-center justify-between overflow-hidden bg-background-darkSecondary px-2.5 md:h-[120px] md:bg-transparent md:px-0">
         <div
            className="bg z-20 hidden h-full w-[200px] items-center bg-default-black md:flex lg:w-[300px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0% 100%)" }}
         >
            <motion.div
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: -50,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
            >
               <Link href="/home">
                  <Image
                     src="/images/logo.png"
                     alt="Autofix_home3"
                     width={190}
                     height={45}
                     quality={100}
                     className="ml-0.5 h-[45px] w-[190px] pr-6 lg:h-auto lg:w-full xl:ml-7 xl:pr-0"
                  />
               </Link>
            </motion.div>
         </div>
         <div className="md:hidden">
            <Logo />
         </div>

         <div className="flex h-14 items-center gap-x-3 text-default md:hidden md:gap-x-6 lg:gap-x-8">
            <div className="flex items-center gap-x-2.5">
               <Link href="/cart">
                  <CartIcon className="h-4 w-4 fill-white" />
               </Link>
               <Separator
                  orientation="vertical"
                  className="h-5 w-0.5 bg-white opacity-100"
               />
               <Link href="/search">
                  <SearchIcon className="h-4 w-4 fill-white" />
               </Link>
            </div>

            <div className="flex items-center gap-x-3 font-header">
               <ResponsiveNavbar />
            </div>
         </div>

         <div className="z-10 hidden h-full flex-1 md:block">
            <div className="-ml-[3%] flex h-[50px] w-[calc(100%+5%)] items-center justify-between bg-primary text-white lg:-ml-[2.5%]">
               <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: {
                        opacity: 0,
                        y: -50,
                     },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: {
                           duration: 0.5,
                        },
                     },
                  }}
                  className="flex h-full w-full items-center justify-between px-5 font-body lg:px-14"
               >
                  <div className="flex items-center lg:space-x-4">
                     <div className="hidden items-center gap-x-2 lg:flex">
                        <EnergyIcon className="fill-white" />
                        <p className="text-sm font-medium xl:text-base xl:leading-5">
                           No Hidden Charges Apply
                        </p>
                     </div>
                     <Separator
                        className="hidden h-6 w-[2px] bg-white opacity-100 lg:flex"
                        orientation="vertical"
                     />
                     <div className="flex items-center gap-x-2">
                        <EnergyIcon className="fill-white" />
                        <Link
                           href="tel:+002522653250"
                           className="text-sm font-medium xl:text-base xl:leading-5"
                        >
                           +00 (252) 2653 250
                        </Link>
                     </div>
                  </div>
                  <div className="flex items-center space-x-1.5 lg:space-x-4">
                     <div className="flex items-center gap-x-2">
                        <EmailInbox2Icon className="fill-white" />
                        <Link
                           href="mailto:info@autofix.com"
                           className="text-sm font-medium xl:text-base xl:leading-5"
                        >
                           info@autofix.com
                        </Link>
                     </div>
                     <Separator
                        className="h-6 w-[2px] bg-white opacity-100"
                        orientation="vertical"
                     />
                     <div className="flex gap-x-2 xl:items-center">
                        <MapsIcon className="h-[20px] w-[22px] fill-white" />
                        <Link
                           href="https://maps.app.goo.gl/sapfa1N5thyUKAFXA"
                           rel="external"
                           target="_blank"
                           className="text-sm font-medium xl:text-base xl:leading-5"
                        >
                           Find Us On Map
                        </Link>
                     </div>
                  </div>
               </motion.div>
            </div>
            <div className="flex h-[70px] flex-1 items-center justify-between pr-3 md:gap-x-1.5 lg:px-6 lg:pr-0">
               <div className="font-header text-sm font-bold leading-4 lg:font-extrabold">
                  <motion.ul className="flex items-center gap-x-2.5 uppercase lg:gap-x-6 xl:gap-x-10">
                     <motion.li
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
                              },
                           },
                        }}
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/"
                                 ? "cursor-pointer text-primary"
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
                           <HoverCardContent className="z-50 mt-1.5 w-32 rounded-sm border-primary bg-black/80 text-white backdrop-blur">
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
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/services"
                                 ? "cursor-pointer text-primary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/services">SERVICES</Link>
                     </motion.li>
                     <motion.li
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
                                 delay: 0.15,
                              },
                           },
                        }}
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/projects"
                                 ? "cursor-pointer text-primary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/projects">PROJECTS</Link>
                     </motion.li>
                     <motion.li
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
                                 delay: 0.2,
                              },
                           },
                        }}
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/pricing"
                                 ? "cursor-pointer text-primary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/pricing">pricing</Link>
                     </motion.li>
                     <motion.li
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
                                 delay: 0.25,
                              },
                           },
                        }}
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/pages"
                                 ? "cursor-pointer text-primary"
                                 : ""
                           }`,
                        )}
                     >
                        <HoverCard>
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
                                 delay: 0.3,
                              },
                           },
                        }}
                        className={cn(
                           "hover:text-tertiary",
                           `${
                              pathname === "/contact"
                                 ? "cursor-pointer text-primary"
                                 : ""
                           }`,
                        )}
                     >
                        <Link href="/contact">CONTACT</Link>
                     </motion.li>
                  </motion.ul>
               </div>
               <motion.div
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
                           delay: 0.35,
                        },
                     },
                  }}
                  className="flex items-center gap-x-2 lg:gap-x-4"
               >
                  <Link href="/cart">
                     <CartIcon className="h-4 w-4 fill-default-black lg:h-6 lg:w-6" />
                  </Link>
                  <Separator
                     orientation="vertical"
                     className="h-4 w-[1.5px] bg-[#DBDEE3] lg:h-6"
                  />
                  <Link href="/search">
                     <SearchIcon className="h-4 w-4 fill-default-black lg:h-6 lg:w-6" />
                  </Link>
               </motion.div>
            </div>
         </div>
         <div
            className="bg hidden h-full w-[200px] items-center justify-center bg-primary lg:flex lg:w-[300px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)" }}
         >
            <MotionLink
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: 50,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                        delay: 0.15,
                     },
                  },
               }}
               href="/get-quote"
               className="flex items-center gap-x-1.5 font-header text-sm font-extrabold uppercase text-white lg:text-base"
            >
               <span>GET QUOTE</span>
               <RightArrowIcon className="fill-white" />
            </MotionLink>
         </div>
      </nav>
   );
};

export { Navbar };

