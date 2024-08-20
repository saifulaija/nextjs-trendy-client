
'use client'
import { useGetAllProductsQuery } from "@/redux/api/features/product/productApi";
import { useDebounced } from "@/redux/hooks";

const CategoryProducts = ({
  category,
  searchTerm,
}: {
  category: string;
  searchTerm: string;
}) => {

      const query: Record<string, any> = {};
      const debounceTerm = useDebounced({ searchQuery: searchTerm, delay: 700 });
      query["subCategory"] = category;

      if (debounceTerm) {
        query["q"] = debounceTerm;
      }

      const { data, isLoading } = useGetAllProductsQuery({ ...query });
  return <div>CategoryProducts {category}</div>;
};

export default CategoryProducts;
