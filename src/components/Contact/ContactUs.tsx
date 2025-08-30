import Image from "next/image";

import { ContactUsForm } from "./ContactForm";

const ContactUs = () => {
   return (
      <section className="py-9 md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="container flex w-full flex-col gap-x-3.5 gap-y-5 font-header md:flex-row md:gap-x-6 lg:gap-x-8 xl:h-[595px] xl:gap-x-12 2xl:gap-x-16">
            <div className="relative w-full md:w-1/2 xl:w-[495px]">
               <Image
                  src="/images/image-20.png"
                  width={434}
                  height={595}
                  alt=""
                  className="z-10 mx-auto mb-auto"
               />
               <div
                  className="absolute bottom-0 left-0 -z-10 h-[416px] w-full bg-tertiary"
                  style={{
                     clipPath: "polygon(0 16%, 100% 0, 100% 100%, 0% 100%)",
                  }}
               />
            </div>

            <div className="my-auto flex-1 px-2.5 md:px-0">
               <span className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
                  get in touch
               </span>

               <h1 className="my-2 font-header text-3xl font-black uppercase lg:my-4 lg:text-4xl xl:text-5xl xl:leading-heavy">
                  contact with us
               </h1>

               <ContactUsForm />
            </div>
         </div>
      </section>
   );
};

export { ContactUs };
