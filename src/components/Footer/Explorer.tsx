import Link from "next/link";

const Explorer = () => {
   return (
      <div className="grid w-full items-center justify-center">
         <h4 className="mb-6 font-header text-lg font-extrabold uppercase text-default ">
            explore
         </h4>
         <ul className="text-lg font-normal leading-9 text-default-foreground">
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/about-us">About Us</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/our-brands">Our Brands</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/careers">Careers</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/our-service">Our Service</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/genuine-parts">Genuine Parts</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/articles">Articles</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/autobody">Autobody</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/explores/Newsletter">Newsletter</Link>
            </li>
         </ul>
      </div>
   );
};

export { Explorer };
