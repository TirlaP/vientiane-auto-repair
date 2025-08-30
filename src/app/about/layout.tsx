import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

import { Navbar } from "@/components/Home/Navbar";

export const metadata: Metadata = {
   title: "About Us",
   description: "About us page",
};

const AboutLayout = ({ children }: Readonly<PropsWithChildren>) => {
   return (
      <>
         <Navbar isFixed />
         {children}
      </>
   );
};

export default AboutLayout;
