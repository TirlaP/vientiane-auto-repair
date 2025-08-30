import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Blogs",
   description: "Blogs page",
};

const BlogsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default BlogsLayout;
