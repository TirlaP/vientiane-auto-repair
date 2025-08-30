import { type project_info } from "@/lib/mock-data";
import { Card } from "../ui/card";

const ProjectInfo = ({
   category,
   client,
   end_time,
   feedback,
   start_time,
}: typeof project_info) => {
   return (
      <Card className="mb-4 p-3 md:mb-0 lg:p-5 xl:p-9">
         <h5 className="relative z-10 font-header text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-lg">
            work info
         </h5>

         <div className="mt-3 md:mt-4 lg:mt-5">
            <ul className="grid space-y-1.5 *:cursor-pointer *:rounded-sm *:px-3 *:py-2 *:font-body *:text-lg *:font-medium md:*:px-4 lg:space-y-3.5 lg:*:px-6 lg:*:py-4">
               <FunFact title="client" value={client} />
               <FunFact title="category" value={category} />
               <FunFact title="start time" value={start_time} />
               <FunFact title="end time" value={end_time} />
               <FunFact title="feedback" value={feedback} />
            </ul>
         </div>
      </Card>
   );
};

export { ProjectInfo };

interface FunFactProps {
   title: string;
   value: string;
}

const FunFact = ({ title, value }: FunFactProps) => {
   return (
      <li className="grid bg-background-fade">
         <span className="font-body text-xs uppercase text-default-tertiary md:text-sm lg:text-base">
            {title}
         </span>
         <span className="font-header text-sm font-extrabold uppercase text-default-black md:text-base lg:text-lg">
            {value}
         </span>
      </li>
   );
};
