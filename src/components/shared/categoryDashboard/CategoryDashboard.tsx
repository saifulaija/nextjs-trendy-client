// "use client";
// import Link from "next/link";
// import {
//   ChevronRight,
//   SearchCheck,
//   LucideHome,
//   BookMarkedIcon,
//   Tag,
//   Book,
//   ShoppingCart,
//   LucideIcon,
//   ShoppingBagIcon,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { getUserInfo } from "@/services/authServices";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// import GlobalSearch from "../globalSearch/GlobalSearch";

// // import { useGetAllCategoryQuery } from "@/redux/api/features/category/categoryApi";
// import assets from "@/app/assets";

// import { TextAlignCenterIcon } from "@radix-ui/react-icons";
// import { Separator } from "@radix-ui/react-separator";
// import AuthButton from "../authButton/AuthButton";

// import { items } from "@/utils/items";
// import { HeaderItems } from "../header/HeaderItem";

// interface SideMenuItem {
//   title: string;
//   path: string;
//   image: string; // URL to the image
//   show?: boolean; // Optional property to control visibility
// }

// interface HeaderMenuItem {
//   title: string;
//   path: string;
//   icon: LucideIcon;
// }

// export function CategoryDashboard({ children }: { children: React.ReactNode }) {
//   const user = getUserInfo();
//   const pathname = usePathname();
//   const [q, setQ] = useState<string>("");

//   const headerMenu: HeaderMenuItem[] = [
//     {
//       title: "Home",
//       path: `/`,
//       icon: LucideHome,
//     },
//     {
//       title: "Bookmark",
//       path: `/blogs/bookmarks`,
//       icon: BookMarkedIcon,
//     },
//     {
//       title: "Tags",
//       path: `/blogs/tags`,
//       icon: Tag,
//     },
//     {
//       title: "Blogs",
//       path: `/blogs`,
//       icon: Book,
//     },
//   ];

//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-muted/40 md:block">
//         <div className="flex h-full max-h-screen flex-col gap-2 fixed">
//           <div className="flex h-14 items-center border-b py-4 px-4 lg:h-[60px] lg:px-6">
//             <Link href="/" className="flex items-center gap-2 font-semibold">
//               <Image
//                 src={assets.images.logo}
//                 width={40}
//                 height={40}
//                 alt={`logo`}
//                 className="rounded-md mr-1"
//               />
//             </Link>
//             <Button variant="link" size="icon" className="ml-auto h-8 w-8">
//               <span className="sr-only">Toggle notifications</span>
//             </Button>
//           </div>
//           <div className="flex-1 overflow-y-auto max-h-full">
//             <nav className="grid items-start px-2 text-md font-medium lg:px-4">
//               <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//                 <SearchCheck className="h-4 w-4" />
//                 Find by Category
//               </div>
//               <Separator />

//               {items.map((item) =>
//                 item.key ? (
//                   <React.Fragment key={item.key}>
//                     <p>{item.label}</p>
//                     <Separator />
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.key} // Use a unique key for each child
//                         href={`/product/category/${child.key}`}
//                         className={cn(
//                           "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
//                           pathname === item.key &&
//                             "text-primary bg-muted border-r-4 border-r-primary"
//                         )}
//                       >
//                         <div className="flex items-center gap-3 capitalize">
//                           <Image
//                             src={child.image}
//                             alt={child.label}
//                             width={24}
//                             height={24}
//                             className="rounded"
//                           />
//                           {child.key}
//                         </div>
//                         <ChevronRight />
//                       </Link>
//                     ))}
//                   </React.Fragment>
//                 ) : null
//               )}
//             </nav>
//             <Separator />
//             <div className="mb-auto p-4">
//               {headerMenu.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.path}
//                   className={cn(
//                     "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
//                     pathname === item.path &&
//                       "text-primary bg-muted border-r-4 border-r-primary"
//                   )}
//                 >
//                   <item.icon className="h-5 w-5" />
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col">
//         <motion.header
//           initial={{ y: -150 }}
//           animate={{ y: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className={`flex justify-between h-14 items-center fixed top-0 left-0 md:left-[280px] right-0 z-50 gap-4 border-b px-4 lg:h-[60px] lg:px-6 ${
//             scrolled ? "bg-opacity-90 border-b backdrop-blur-xl" : ""
//           }`}
//         >
//           {/* <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="shrink-0 md:hidden"
//               >
//                 <TextAlignCenterIcon className="h-5 w-5" />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className="flex flex-col overflow-y-auto max-h-full"
//             >
//               <nav className="grid gap-2 text-lg font-medium">
//                 <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//                   <SearchCheck className="h-4 w-4" />
//                   Find by Category
//                 </div>
//                 <Separator />
//                 <GlobalSearch placeholder="Search medicine......." />
//                 {items.map((item) =>
//                   item.key ? (
//                     <React.Fragment key={item.key}>
//                       <p>{item.label}</p>
//                       <Separator />
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.key} // Use a unique key for each child
//                           href={`/product/category/${child.key}`}
//                           className={cn(
//                             "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
//                             pathname === item.key &&
//                               "text-primary bg-muted border-r-4 border-r-primary"
//                           )}
//                         >
//                           <div className="flex items-center gap-3 capitalize">
//                             <Image
//                               src={child.image}
//                               alt={child.label}
//                               width={24}
//                               height={24}
//                               className="rounded"
//                             />
//                             {child.key}
//                           </div>
//                           <ChevronRight />
//                         </Link>
//                       ))}
//                     </React.Fragment>
//                   ) : null
//                 )}
//               </nav>

//               <div className="mt-auto">
//                 {headerMenu.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.path}
//                     className={cn(
//                       "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
//                       pathname === item.path &&
//                         "text-primary bg-muted border-r-4 border-r-primary"
//                     )}
//                   >
//                     <item.icon className="h-5 w-5" />
//                     {item.title}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet> */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="shrink-0 md:hidden"
//               >
//                 <TextAlignCenterIcon className="h-5 w-5" />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="left"
//               className={cn(
//                 "flex flex-col max-h-full md:static md:translate-x-0",
//                 "w-[80%] sm:w-[300px] md:w-[300px]  overflow-y-auto"
//               )}
//             >
//               <nav className="grid  text-lg font-medium">
//                 <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
//                   <SearchCheck className="h-4 w-4" />
//                   Find by Category
//                 </div>
//                 <Separator />
//                 <GlobalSearch placeholder="Search medicine......." />
//                 {items.map((item) =>
//                   item.key ? (
//                     <React.Fragment key={item.key}>
//                       <p>{item.label}</p>
//                       <Separator />
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.key} // Use a unique key for each child
//                           href={`/product/category/${child.key}`}
//                           className={cn(
//                             "flex items-center justify-between gap-3  py-2 text-muted-foreground transition-all hover:text-primary",
//                             pathname === item.key &&
//                               "text-primary bg-muted border-r-4 border-r-primary"
//                           )}
//                         >
//                           <div className="flex items-center gap-3 capitalize">
//                             <Image
//                               src={child.image}
//                               alt={child.label}
//                               width={24}
//                               height={24}
//                               className="rounded"
//                             />
//                             {child.key}
//                           </div>
//                           <ChevronRight />
//                         </Link>
//                       ))}
//                     </React.Fragment>
//                   ) : null
//                 )}
//               </nav>

//               <div className="mt-auto">
//                 {headerMenu.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.path}
//                     className={cn(
//                       "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
//                       pathname === item.path &&
//                         "text-primary bg-muted border-r-4 border-r-primary"
//                     )}
//                   >
//                     <item.icon className="h-5 w-5" />
//                     {item.title}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>

//           <div className="items-center flex md:hidden">
//             <Link href="/">
//               <Image
//                 src={assets.images.logo}
//                 alt="logo"
//                 width={60}
//                 height={60}
//                 className="rounded"
//               />
//             </Link>
//           </div>
//           <nav className="hidden lg:flex flex-1 justify-center">
//             <HeaderItems />
//           </nav>
//           <div className="flex items-center gap-2">
//             <div className="hidden md:block flex-1 max-w-lg">
//               <GlobalSearch placeholder="Search  products......." />
//             </div>
//             <Button
//               asChild
//               variant="outline"
//               className="hover:bg-primary text-gray-400 hover:text-white px-2 py-1 hover:transition-all hover:duration-200"
//             >
//               <Link href="/signin" className="flex items-center font-semibold">
//                 <ShoppingBagIcon /> ৳ 0
//               </Link>
//             </Button>

//             <AuthButton />
//           </div>
//         </motion.header>

//         <main className="flex-1  p-4 px-4 lg:px-6 mt-16">{children}</main>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import {
  ChevronRight,
  SearchCheck,
  LucideHome,
  BookMarkedIcon,
  Tag,
  Book,
  ShoppingBagIcon,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getUserInfo } from "@/services/authServices";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import GlobalSearch from "../globalSearch/GlobalSearch";
import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import AuthButton from "../authButton/AuthButton";
import { items } from "@/utils/items";
import { HeaderItems } from "../header/HeaderItem";
import assets from "@/app/assets";

interface SideMenuItem {
  title: string;
  path: string;
  image: string; // URL to the image
  show?: boolean; // Optional property to control visibility
}

interface HeaderMenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export function CategoryDashboard({ children }: { children: React.ReactNode }) {
  const user = getUserInfo();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const headerMenu: HeaderMenuItem[] = [
    {
      title: "Home",
      path: `/`,
      icon: LucideHome,
    },
    {
      title: "Bookmark",
      path: `/blogs/bookmarks`,
      icon: BookMarkedIcon,
    },
    {
      title: "Tags",
      path: `/blogs/tags`,
      icon: Tag,
    },
    {
      title: "Blogs",
      path: `/blogs`,
      icon: Book,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar for larger devices */}
      <div className="hidden border-r  md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed w-[280px]">
          <div className="flex h-14 items-center border-b py-4 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={assets.images.logo}
                width={40}
                height={40}
                alt="logo"
                className="rounded-md mr-1"
              />
            </Link>
            <Button variant="link" size="icon" className="ml-auto h-8 w-8">
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto max-h-full">
            <nav className="grid items-start px-2 text-md font-medium lg:px-4">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <SearchCheck className="h-4 w-4" />
                Find by Category
              </div>
              <Separator />

              {items.map((item) =>
                item.key ? (
                  <React.Fragment key={item.key}>
                    <p>{item.label}</p>
                    <Separator />
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={`/product-category/${item.key}/${child.key}`}
                        className={cn(
                          "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                          pathname === child.key &&
                            "text-primary bg-muted border-r-4 border-r-primary"
                        )}
                      >
                        <div className="flex items-center gap-3 capitalize">
                          <Image
                            src={child.image}
                            alt={child.label}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                          {child.key}
                        </div>
                        <ChevronRight />
                      </Link>
                    ))}
                  </React.Fragment>
                ) : null
              )}
            </nav>
            <Separator />
            <div className="mb-auto p-4">
              {headerMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.path &&
                      "text-primary bg-muted border-r-4 border-r-primary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <motion.header
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={cn(
            "flex justify-between h-14 items-center fixed top-0 left-0 md:left-[280px] right-0 z-50 gap-4 border-b px-4 lg:h-[60px] lg:px-6",
            scrolled ? "bg-opacity-90 border-b backdrop-blur-xl" : ""
          )}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <TextAlignCenterIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className={cn(
                "flex flex-col overflow-y-auto",
                "max-h-full  " // Set full width on smaller devices, and 280px on large devices
              )}
            >
              <nav className="grid gap-2 text-lg font-medium">
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <SearchCheck className="h-4 w-4" />
                  Find by Category
                </div>
                <Separator />
                <GlobalSearch placeholder="Search products......." />
                {items.map((item) =>
                  item.key ? (
                    <React.Fragment key={item.key}>
                      <p>{item.label}</p>
                      <Separator />
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={`/product/category/${child.key}`}
                          className={cn(
                            "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname === child.key &&
                              "text-primary bg-muted border-r-4 border-r-primary"
                          )}
                        >
                          <div className="flex items-center gap-3 capitalize">
                            <Image
                              src={child.image}
                              alt={child.label}
                              width={24}
                              height={24}
                              className="rounded"
                            />
                            {child.key}
                          </div>
                          <ChevronRight />
                        </Link>
                      ))}
                    </React.Fragment>
                  ) : null
                )}
              </nav>

              <div className="mt-auto">
                {headerMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      pathname === item.path &&
                        "text-primary bg-muted border-r-4 border-r-primary"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="items-center flex md:hidden">
            <Link href="/">
              <Image
                src={assets.images.logo}
                alt="logo"
                width={60}
                height={60}
                className="rounded"
              />
            </Link>
          </div>
          <nav className="hidden lg:flex flex-1 justify-center">
            <HeaderItems />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:block flex-1 max-w-lg">
              <GlobalSearch placeholder="Search products......." />
            </div>
            <Button
              asChild
              variant="outline"
              className="hover:bg-primary text-gray-400 hover:text-white px-2 py-1 hover:transition-all hover:duration-200"
            >
              <Link href="/signin" className="flex items-center font-semibold">
                <ShoppingBagIcon className="h-5 w-5" />
                <span className="sr-only">View shopping cart</span>
              </Link>
            </Button>
            <AuthButton />
          </div>
        </motion.header>
        <main className="mt-20 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}






