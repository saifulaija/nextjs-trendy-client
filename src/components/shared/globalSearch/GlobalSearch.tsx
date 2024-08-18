"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function GlobalSearch({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  //   const { data } = useGetAllBlogsQuery({});

  const getIdFromPathname = (pathname: string) => {
    const match = pathname.match(
      /\/blogs\/(?:details|bookmarks\/details)\/(.+)/
    );
    return match ? match[1] : null;
  };

  const id = getIdFromPathname(pathname);

  const disableSearch = !!id || pathname === "/blogs/tags";

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          onChange={(e) => {
            if (!disableSearch) {
              handleSearch(e.target.value);
            }
          }}
          placeholder={placeholder}
          className={cn(
            "w-full appearance-none bg-background pl-8 shadow-none md:w-full lg:w-full rounded-lg"
          )}
          defaultValue={searchParams.get("query")?.toString()}
          disabled={disableSearch}
        />
      </div>
    </div>
  );
}
