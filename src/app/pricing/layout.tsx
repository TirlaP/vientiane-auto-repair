import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Pricing Plan",
   description: "Pricing plan page",
};

const ProjectLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ProjectLayout;
