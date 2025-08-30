import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Project Details",
   description: "Project Details page",
};

const ProjectDetailsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ProjectDetailsLayout;
