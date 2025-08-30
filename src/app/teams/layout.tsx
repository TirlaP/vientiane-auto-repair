import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Teams",
   description: "Teams page",
};

const TeamsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default TeamsLayout;
