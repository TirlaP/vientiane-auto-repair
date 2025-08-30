import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Frequently Ask Question - FAQs",
   description: "Frequently Ask Question page",
};

const ProjectLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default ProjectLayout;
