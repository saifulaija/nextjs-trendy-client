'use client'

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { truncateTitle } from "@/utils/truncateTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router=useRouter()
  const shortTitle = truncateTitle(product?.name, 20);

    const handleDetails = () => {
      router.push(`blogs/details/${product?._id}`);
    };


  return (
    <Card
      onClick={handleDetails}
      className={cn(
        "group mx-auto w-72 transform overflow-hidden hover:cursor-pointer rounded-lg shadow-md"
      )}
    >
      <div className="relative  w-full overflow-hidden">
        <Image
          className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={product?.images[0]}
          alt="Product Image"
          width={400}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="p-2">
        <h2 className="text-md font-medium  text-gray-700 capitalize">
          {shortTitle}
        </h2>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            $20.00
          </p>
          <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-primary">20% off</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
