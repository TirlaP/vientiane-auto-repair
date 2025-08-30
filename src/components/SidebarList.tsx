import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { RightArrow2Icon } from "./ui/icons";

export type ListItemType = {
   id: number;
   title: string;
};
export interface SidebarListProps {
   name: string;
   listItem: ListItemType[];
   active?: number;
   isIcon?: boolean;
}

const SidebarList = ({ listItem, name, active, isIcon }: SidebarListProps) => {
   return (
      <Card className="p-3 lg:p-5 xl:p-9">
         <h5 className="relative z-10 font-header text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-lg">
            {name}
         </h5>

         <div className="mt-2 lg:mt-3.5 xl:mt-5">
            <ul className="grid space-y-2.5 font-body text-sm font-medium *:cursor-pointer *:rounded-sm *:px-6 *:py-3 lg:space-y-3.5 lg:text-lg lg:*:px-4 lg:*:py-4 ">
               {listItem.map((item) => (
                  <li
                     key={item.id}
                     className={cn(
                        "flex items-center justify-between",
                        active === item.id
                           ? "bg-primary text-default"
                           : "bg-background-fade text-default-tertiary",
                     )}
                  >
                     <span>{item.title}</span>{" "}
                     {isIcon && (
                        <RightArrow2Icon
                           className={cn(
                              "h-3 w-5",
                              active === item.id
                                 ? "fill-default"
                                 : "fill-default-tertiary",
                           )}
                        />
                     )}
                  </li>
               ))}
            </ul>
         </div>
      </Card>
   );
};

export { SidebarList };
