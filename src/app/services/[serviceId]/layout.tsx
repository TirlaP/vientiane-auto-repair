import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Service Details",
   description: "Service Details Page",
};

const ServiceDetailsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ServiceDetailsLayout;
