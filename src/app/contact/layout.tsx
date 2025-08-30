import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact with Us",
   description: "Contact page",
};

const BlogsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default BlogsLayout;
