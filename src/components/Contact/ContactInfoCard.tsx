import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
   title: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
   contact: string[];
   isCentered?: boolean;
}

const ContactInfoCard = ({
   Icon,
   contact,
   title,
   isCentered,
}: ContactInfoCardProps) => {
   return (
      <div
         className={cn(
            "mx-auto grid h-[280px] w-full max-w-[420px] justify-center gap-y-2 rounded bg-background-fade bg-[url('/images/bg-3.svg')] px-16 py-10 md:gap-y-3 lg:gap-y-5",
            isCentered
               ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
               : "md:mx-0",
         )}
      >
         <div className="mx-auto flex h-[70px] w-20 skew-x-6 items-center justify-center rounded-sm bg-primary *:block *:-skew-x-6">
            <Icon className="h-[45px] w-[34px] fill-white" />
         </div>
         <h6 className="text-center font-header text-base font-extrabold uppercase text-default-black lg:text-lg">
            {title}
         </h6>
         <div>
            {contact.map((info) => (
               <p
                  key={info}
                  className="text-center font-body text-base uppercase text-default-tertiary lg:text-lg"
               >
                  {info}
               </p>
            ))}
         </div>
      </div>
   );
};

export { ContactInfoCard };
