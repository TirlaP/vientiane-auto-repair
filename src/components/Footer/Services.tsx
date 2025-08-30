import Link from "next/link";

const Services = () => {
   return (
      <div className="w-full">
         <h4 className="mb-6 font-header text-lg font-extrabold uppercase text-default">
            services
         </h4>
         <ul className="text-lg font-normal leading-9 text-default-foreground">
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/checking-engine">Checking Engine</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/ac-repair-service">AC Repair Service</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/brake-repair">Brake Repair</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/filter-change">Filter Change</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/emissions">Emissions</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/changing-wheel">Changing Wheel</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/glass-repair">Glass Repair</Link>
            </li>
            <li className="transition-all duration-200 hover:text-tertiary hover:underline">
               <Link href="/services/interior-design">Interior Design</Link>
            </li>
         </ul>
      </div>
   );
};

export { Services };
