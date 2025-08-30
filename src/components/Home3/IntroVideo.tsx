import { PlayButtonIcon } from "../ui/icons";
import { Separator } from "../ui/separator";

const IntroVideo = () => {
   return (
      <section className="flex h-[350px] w-full items-center justify-center bg-[url('/images/image-32.png')] font-header text-white md:h-[400px] lg:h-[500px] xl:h-[600px]">
         <div className="flex flex-col items-center gap-y-5 md:flex-row md:gap-x-10 xl:gap-x-[55px]">
            <h2 className="text-center text-3xl font-black uppercase md:text-right lg:text-5xl">
               we driving <br /> confidence in <br /> community
            </h2>
            <Separator
               orientation="vertical"
               className="hidden h-[200px] w-px bg-white/60 md:block"
            />
            <Separator
               orientation="horizontal"
               className="bg-white/60 md:hidden"
            />
            <div className="flex items-center justify-center gap-x-4">
               <div className="flex h-16 w-16 -rotate-[10deg] cursor-pointer items-center justify-center rounded-lg bg-tertiary *:rotate-[10deg] lg:h-[100px] lg:w-[100px]">
                  <PlayButtonIcon className="h-[21px] w-[21px] fill-default-black" />
               </div>
               <h4 className="text-base font-extrabold uppercase text-white md:text-lg">
                  intro video
               </h4>
            </div>
         </div>
      </section>
   );
};

export { IntroVideo };
