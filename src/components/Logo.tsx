import Image from "next/image";
import Link from "next/link";
import { forwardRef, type LegacyRef } from "react";

const Logo = forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => (
   <div
      className="h-[31.5px] w-[137.5px] md:h-[42px] md:w-[183px]"
      {...props}
      ref={ref}
   >
      <Link href="/" className="h-full w-full">
         <Image
            src="/images/logo-main.png"
            alt="Liberty Auto SLC"
            width={183}
            height={42}
            loading="lazy"
            className="ld:w-[170px] h-auto w-[150px] md:w-[160px] xl:w-[180px]"
            quality={100}
         />
      </Link>
   </div>
));
Logo.displayName = "Logo";

export { Logo };

