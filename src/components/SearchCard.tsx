import { Card } from "@/components/ui/card";
import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

const SearchCard = () => {
   return (
      <Card className="p-3 lg:p-5 xl:p-9">
         <h5 className="relative z-10 font-header text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-lg">
            search
         </h5>

         <div className="mt-2 lg:mt-3.5 xl:mt-5">
            <div className="flex h-[50px] w-full items-center justify-between rounded-md border border-[#D9D9D9] p-[5px] lg:h-[60px]">
               <Input
                  placeholder="keywords..."
                  className="flex-1 border-0 bg-transparent px-2.5 font-body text-sm font-medium text-default-tertiary placeholder:font-body placeholder:text-sm placeholder:font-medium placeholder:uppercase placeholder:text-default-tertiary lg:px-5 lg:text-base lg:placeholder:text-base"
               />
               <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[3px] bg-primary lg:h-[50px] lg:w-[50px]">
                  <SearchIcon className="h-4 w-4 -rotate-90 fill-white lg:h-6 lg:w-6" />
               </div>
            </div>
         </div>
      </Card>
   );
};

export { SearchCard };
