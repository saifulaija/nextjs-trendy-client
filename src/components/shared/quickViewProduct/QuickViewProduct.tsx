import { Card } from "@/components/ui/card";
import { TProduct } from "@/types/product.type";
import Image from "next/image";
import React from "react";

const QuickViewProduct = ({ product }: { product: TProduct }) => {
  const discount = 20; // Example discount percentage
  const originalPrice = 25.0; // Example original price
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;

  return (
    <Card className="p-4 shadow-lg rounded-lg">
      <div className="relative w-full overflow-hidden group rounded-lg">
        <Image
          className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={product?.images[0]}
          alt="Product Image"
          width={500}
          height={300}
          layout="responsive"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}% Off
        </div>

        {/* Product Tag */}
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          New Arrival
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-900 capitalize">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>

        <div className="flex items-center mt-3">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${discountedPrice.toFixed(2)}
          </p>
          <p className="ml-2 text-base font-medium text-gray-500 line-through dark:text-gray-300">
            ${originalPrice.toFixed(2)}
          </p>
          <p className="ml-auto text-base font-medium text-primary">20% off</p>
        </div>

        {/* Order Now Button */}
        <button className="mt-4 w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
          Order Now
        </button>
      </div>
    </Card>
  );
};

export default QuickViewProduct;
