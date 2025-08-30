import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Services",
   description: "Fxiton services page",
};

const ServiceLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ServiceLayout;
