'use client'

import React, { useState } from "react";
import { BestSellingCarousel } from "./BestSellingCarousel";

const BestSellingProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    // <div className="w-full">
      <div className="container mx-auto">
        <div className="flex align-center  gap-5 items-center">
          <h2 className="mt-20 border-primary border-l-2 border-t-2 h-10 w-full"></h2>
          <h2 className="pt-10 text-gray-700 flex justify-center items-center text-divider w-[780px]  md:lg:w-[580px] font-semibold md:text-[15px] text-[12px]">
            BEST SELLING'S PRODUCTS
          </h2>
          <h2 className="mt-20  border-primary w-full border-t-2 border-r-2 h-10"></h2>
        </div>

        <div className="flex justify-center items-center mt-5">
          <BestSellingCarousel />
        </div>

        <div className="flex mt-5">
          <div className="flex-1 border-b-2 border-l-2 border-r-2 border-primary h-10"></div>
        </div>
      </div>
    // </div>
  );
};

export default BestSellingProducts;
