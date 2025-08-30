import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Home 2",
   description: "Home 2 description",
};

const Home2Layout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default Home2Layout;
