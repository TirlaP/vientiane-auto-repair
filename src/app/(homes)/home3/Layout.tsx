import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Home 3",
   description: "Home 3 page",
};

const HomeLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default HomeLayout;
