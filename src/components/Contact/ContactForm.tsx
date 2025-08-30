"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { RightArrowIcon } from "@/components/ui/icons";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const FormSchema = z.object({
   username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
   }),
});

export function ContactUsForm() {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         username: "",
      },
   });

   function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
         title: "You submitted the following values:",
         description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
               <code className="text-white">
                  {JSON.stringify(data, null, 2)}
               </code>
            </pre>
         ),
      });
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-4 w-full space-y-2 md:space-y-4 lg:my-7 lg:space-y-8"
         >
            <div className="grid grid-cols-2 items-center gap-2 md:gap-4 lg:gap-8">
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="name*"
                              {...field}
                              className="h-[50px] px-3 py-3 text-sm placeholder:text-sm lg:h-[60px] lg:px-6 lg:py-3 lg:text-base lg:placeholder:text-base"
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="phone*"
                              {...field}
                              className="h-[50px] px-3 py-3 text-sm placeholder:text-sm lg:h-[60px] lg:px-6 lg:py-3 lg:text-base lg:placeholder:text-base"
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
            </div>
            <div className="grid grid-cols-2 items-center gap-2 md:gap-4 lg:gap-8">
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="email*"
                              {...field}
                              className="h-[50px] px-3 py-3 text-sm placeholder:text-sm lg:h-[60px] lg:px-6 lg:py-3 lg:text-base lg:placeholder:text-base"
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="subject*"
                              {...field}
                              className="h-[50px] px-3 py-3 text-sm placeholder:text-sm lg:h-[60px] lg:px-6 lg:py-3 lg:text-base lg:placeholder:text-base"
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
            </div>
            <FormField
               control={form.control}
               name="username"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Textarea
                           className="h-28 px-3 py-3 text-sm placeholder:text-sm lg:h-40 lg:px-6 lg:py-3 lg:text-base lg:placeholder:text-base"
                           placeholder="white your message*"
                           {...field}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            <Button
               type="submit"
               variant="skewBig"
               size="skewBig"
               className="ml-1.5 mt-3 h-[42px] w-[132px] lg:h-[60px] lg:w-[188px]"
            >
               <span className="gap-x-0.5 text-[11px] lg:gap-x-1.5 lg:text-sm">
                  send now
               </span>{" "}
               <RightArrowIcon className="h-[11px] w-[11px] fill-white lg:h-[13px] lg:w-[13px]" />
            </Button>
         </form>
      </Form>
   );
}
