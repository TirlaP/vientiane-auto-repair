import Image from "next/image";
import Link from "next/link";

import { RightArrowIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
   return (
      <section className="grid h-screen items-center justify-center">
         <div className="flex flex-col items-center justify-center">
            <Image
               src="/images/image-35.svg"
               width={665}
               height={365}
               alt="Autofix not-found"
            />
            <div className="mb-8 mt-[60px]">
               <h1 className="text-center font-header text-5xl font-black uppercase text-default-black">
                  oops
               </h1>
               <p className="my-4 text-center font-body text-lg font-medium uppercase text-default-tertiary">
                  Sorry, we couldn&apos;t find this page
               </p>
            </div>
            <div>
               <Link
                  href="/"
                  className={buttonVariants({
                     variant: "skewBig",
                     className: "bg-black text-white",
                     size: "skewBig",
                  })}
               >
                  <span>Return Home</span>
                  <RightArrowIcon className="fill-white" />
               </Link>
            </div>
         </div>
      </section>
   );
}
