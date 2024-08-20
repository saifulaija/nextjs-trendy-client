"use client";
import Link from "next/link";
import {
  ChevronRight,
  SearchCheck,
  LucideHome,
  BookMarkedIcon,
  Tag,
  Book,
  ShoppingCart,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getUserInfo } from "@/services/authServices";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/constants/common";
import GlobalSearch from "../globalSearch/GlobalSearch";
import AuthButton from "../shared/AuthButton";
import { useGetAllCategoryQuery } from "@/redux/api/features/category/categoryApi";
import assets from "@/app/assets";

import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";

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
  const { data: categories, isLoading } = useGetAllCategoryQuery({});
  const user = getUserInfo();
  const pathname = usePathname();
  const [q, setQ] = useState<string>("");

  // Dynamically generate sideMenu using fetched categories
  const sideMenu: SideMenuItem[] =
    categories?.map((category: any) => ({
      title: category.categoryName,
      path: `/blogs/category/${encodeURIComponent(category.categoryName)}`,
      image: category.image,
      show: true, // Set visibility based on your logic
    })) || [];

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

  const [scrolled, setScrolled] = useState<boolean>(false);

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
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="flex h-14 items-center border-b py-4 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={assets.svg.logo}
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
                className="rounded-md mr-1"
              />
              {APP_NAME}
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
              {sideMenu.map((item, index) =>
                item.show ? (
                  <Link
                    key={index}
                    href={item.path}
                    className={cn(
                      "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      pathname === item.path &&
                        "text-primary bg-muted border-r-4 border-r-primary"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                      {item.title}
                    </div>
                    <ChevronRight />
                  </Link>
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
          className={`flex justify-between h-14 items-center fixed top-0 left-0 md:left-[280px] right-0 z-50 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ${
            scrolled ? "bg-opacity-90 border-b backdrop-blur-xl" : ""
          }`}
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
              className="flex flex-col overflow-y-auto max-h-full"
            >
              <nav className="grid gap-2 text-lg font-medium">
                <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <SearchCheck className="h-4 w-4" />
                  Find by Category
                </div>
                <Separator />
                <GlobalSearch placeholder="Search medicine......." />
                {sideMenu.map((item, index) =>
                  item.show ? (
                    <Link
                      key={index}
                      href={item.path}
                      className={cn(
                        "flex items-center justify-between gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        pathname === item.path &&
                          "text-primary bg-muted border-r-4 border-r-primary"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="rounded"
                        />
                        {item.title}
                      </div>
                      <ChevronRight />
                    </Link>
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

          <div className="hidden md:block flex-1">
            <GlobalSearch placeholder="Search blog..........." />
          </div>

          <Badge variant="outline" className={cn("rounded-sm bg-primary")}>
            <ShoppingCart color="white" />
          </Badge>

          <AuthButton />
        </motion.header>

        <main className="flex-1  p-4 px-4 lg:px-6">{children}</main>
      </div>
    </div>
  );
}
