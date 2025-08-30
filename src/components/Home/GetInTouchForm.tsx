"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { RightArrowIcon } from "@/components/ui/icons";
import { MotionDiv, MotionH1 } from "@/components/animations/motion";

const FormSchema = z.object({
   name: z.string().min(2, {
      message: "name must be at least 2 characters.",
   }),
   email: z.string().email(),
   phone: z.string().min(10),
   subject: z.string().min(2),
   message: z.string().min(10),
});

export function GetInTouchForm() {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         email: "",
         name: "",
         message: "",
         phone: "",
         subject: "",
      },
   });

   function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
         title: "You submitted the following values:",
         description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
               <code className="text-default">
                  {JSON.stringify(data, null, 2)}
               </code>
            </pre>
         ),
      });
   }

   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0 },
            onscreen: {
               opacity: 1,

               transition: { duration: 1 },
            },
         }}
         className="mx-auto flex w-full flex-col items-center justify-center px-5 lg:w-[645px] xl:px-0"
      >
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="w-full font-body"
            >
               <MotionH1
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0 },
                     onscreen: {
                        opacity: 1,

                        transition: { duration: 0.5, delay: 0.3 },
                     },
                  }}
                  className="mb-3 font-header text-[35px] font-black uppercase leading-[40px] text-default md:mb-5 md:text-[45px] md:leading-[55px] lg:mb-7 lg:text-[60px] lg:leading-[70px] xl:mb-9"
               >
                  GET IN TOUCH
               </MotionH1>
               <div className="flex w-full flex-col gap-y-4 md:gap-y-[30px]">
                  <MotionDiv
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                           opacity: 1,

                           transition: { duration: 0.5, delay: 0.3 },
                        },
                     }}
                     className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-[30px] md:gap-y-0"
                  >
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Input
                                    placeholder="name*"
                                    {...field}
                                    className="rounded-sm border-[#FF916B] bg-[#FF916B] font-body text-sm font-medium text-white placeholder:font-body placeholder:font-medium placeholder:uppercase placeholder:text-white focus:ring-2 focus:ring-white"
                                 />
                              </FormControl>
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Input
                                    placeholder="email*"
                                    {...field}
                                    className="rounded-sm border-[#FF916B] bg-[#FF916B] font-body text-sm font-medium text-white placeholder:font-body placeholder:font-medium placeholder:uppercase placeholder:text-white"
                                 />
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  </MotionDiv>

                  <MotionDiv
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                           opacity: 1,

                           transition: { duration: 0.5, delay: 0.3 },
                        },
                     }}
                     className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-[30px] md:gap-y-0"
                  >
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Input
                                    placeholder="phone*"
                                    {...field}
                                    className="rounded-sm border-[#FF916B] bg-[#FF916B] font-body text-sm font-medium text-white placeholder:font-body placeholder:font-medium placeholder:uppercase placeholder:text-white"
                                 />
                              </FormControl>
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Input
                                    placeholder="SUBJECT*"
                                    {...field}
                                    className="rounded-sm border-[#FF916B] bg-[#FF916B] font-body text-sm font-medium text-white placeholder:font-body placeholder:font-medium placeholder:uppercase placeholder:text-white"
                                 />
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  </MotionDiv>

                  <MotionDiv
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                           opacity: 1,

                           transition: { duration: 0.5, delay: 0.3 },
                        },
                     }}
                     className="w-full"
                  >
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                           <FormItem>
                              <FormControl>
                                 <Textarea
                                    placeholder="WRITE YOUR MESSAGE*"
                                    {...field}
                                    className="min-h-24 rounded-sm border-[#FF916B] bg-[#FF916B] font-body text-sm font-medium text-white placeholder:font-body placeholder:font-medium placeholder:uppercase placeholder:text-white md:min-h-[150px]"
                                 />
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  </MotionDiv>

                  <MotionDiv
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                           opacity: 1,

                           transition: { duration: 0.5, delay: 0.3 },
                        },
                     }}
                     className="space-y-20"
                  >
                     <Button
                        type="submit"
                        size="lg"
                        variant="skew"
                        className="ml-1.5 h-[60px] w-[200px] rounded-sm bg-black hover:bg-black/80"
                     >
                        <span className="flex items-center justify-between gap-x-1.5 text-sm font-extrabold">
                           GET QUOTE <RightArrowIcon className="fill-white" />
                        </span>
                     </Button>
                  </MotionDiv>
               </div>
            </form>
         </Form>
      </MotionDiv>
   );
}
