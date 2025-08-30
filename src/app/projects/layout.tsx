import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Projects",
   description: "Projects page",
};

const ProjectLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ProjectLayout;
