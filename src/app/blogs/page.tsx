import { ScrollBarAnime } from "@/components/animations/scroll";
import { BlogCard } from "@/components/Blogs/BlogCard";
import { Footer } from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import { PageLanding } from "@/components/PageLanding";
import { SearchCard } from "@/components/SearchCard";
import { SidebarList } from "@/components/SidebarList";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import { blogs_data, services_list } from "@/lib/mock-data";

const BlogsPage = () => {
   return (
      <>
         <Navbar isFixed />
         <main className="overflow-hidden">
            <ScrollBarAnime />
            <PageLanding header="our blogs" title="Our Blogs" />

            <section className="container grid grid-cols-2 gap-x-3.5 gap-y-10 px-5 py-9 md:grid-cols-3 md:py-[80px] lg:gap-x-5 lg:py-[120px] xl:gap-x-7 xl:px-0 xl:py-[150px]">
               <div className="col-span-2 block w-full md:hidden">
                  <SearchCard />
               </div>

               <div className="col-span-2 grid gap-y-2.5 lg:gap-y-4 xl:gap-y-8">
                  {blogs_data.map((blog) => (
                     <BlogCard key={blog.id} {...blog} />
                  ))}

                  <div>
                     {" "}
                     <Pagination>
                        <PaginationContent>
                           <PaginationItem>
                              <PaginationPrevious href="#" />
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationLink href="#">1</PaginationLink>
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationLink href="#" isActive>
                                 2
                              </PaginationLink>
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationLink href="#">3</PaginationLink>
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationEllipsis />
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationNext href="#" />
                           </PaginationItem>
                        </PaginationContent>
                     </Pagination>
                  </div>
               </div>
               <div className="col-span-2 md:col-span-1">
                  <div className="grid gap-y-2.5 lg:gap-y-4 xl:gap-y-8">
                     <div className="hidden w-full md:block">
                        <SearchCard />
                     </div>

                     <SidebarList
                        listItem={services_list}
                        name="category"
                        active={2}
                     />
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default BlogsPage;
