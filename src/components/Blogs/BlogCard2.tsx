import Image from "next/image";

import { type blogs_2_data } from "@/lib/mock-data";
import { CopyIcon, RightArrow2Icon } from "../ui/icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const BlogCard2 = ({ category, id, img, title }: (typeof blogs_2_data)[0]) => {
   return (
      <div>
         <Image src={`/images/${img}`} alt={title} width={420} height={320} />
         <div className="bg-background-fade bg-[url('/images/bg-3.svg')] p-2 md:p-4 lg:p-6 xl:p-10">
            <div className="mb-2 flex items-center gap-x-1 font-body text-[15px] font-bold uppercase text-default-tertiary lg:mb-4 lg:gap-x-2">
               <CopyIcon className="h-3 w-3 fill-primary lg:h-4 lg:w-4" />{" "}
               <span className="text-sm lg:text-base">{category}</span>
            </div>
            <h5 className="font-header text-base font-extrabold uppercase text-default-black lg:text-2xl">
               {title}
            </h5>

            <Link
               href={`/blogs/${id}`}
               className={buttonVariants({
                  variant: "skew",
                  className:
                     "group ml-1 mt-3.5 h-[30px] w-14 rounded-sm border border-default-tertiary bg-transparent transition-all duration-75 hover:border-primary hover:bg-primary md:mt-5 lg:mt-7 xl:mt-9",
               })}
            >
               <RightArrow2Icon className="fill-default-tertiary group-hover:fill-default" />
            </Link>
         </div>
      </div>
   );
};

export { BlogCard2 };
