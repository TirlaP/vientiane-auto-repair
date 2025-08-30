import { type PropsWithChildren } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
   title: "Blog Details",
   description: "Blog Details page",
};

const BlogDetailsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default BlogDetailsLayout;
