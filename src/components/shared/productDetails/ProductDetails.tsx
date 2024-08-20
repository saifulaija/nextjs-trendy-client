"use client";

import { useGetSingleProductQuery } from "@/redux/api/features/product/productApi";
import React from "react";
import CustomLoader from "../customLoader/CustomLoader";

interface ProductDetailsProps {
  id: string;
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import ImageSlide from "./Imageslide";
import { Separator } from "@radix-ui/react-separator";

const ProductDetails = ({ id }: ProductDetailsProps) => {
  const { data, isLoading, error } = useGetSingleProductQuery(id);


  return (
    <div className="w-full">
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="container mx-auto">
         <div className="mt-3">
            <Breadcrumb >
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>product</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Details</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{data[0]?.name}</BreadcrumbPage>
                </BreadcrumbItem>
                {/* {q && (
              <>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{q}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )} */}
              </BreadcrumbList>
            </Breadcrumb>
         </div>

          <div className="md:flex md:justify-center md:items-center md:gap-2 space-x-5 rounded mt-10">
            <div className="md:max-w-[40%] bg-white  pl-20 md:lg:pl:0 md:lg:p:0 ">
            
                <ImageSlide images={data[0]?.images} />
            </div>
            <div className="max-w-[90%] md:max-w-[60%] border border-neutral-[1px] rounded-sm">
              <div className="py-5 flex justify-evenly items-center bg-neutral-100">
                <h4 className="text-lg text-balance md:text-xl text-center font-semibold text-textprimary capitalize mb-0">
                  {data[0]?.name}
                </h4>
                {/* <div className="flex justify-center items-center gap-2">
                  <Rate
                    disabled
                    value={avgRating}
                    className="text-yellow-400"
                  />
                  <p>({product?.data[0]?.reviews?.length}) Reviews</p>
                </div> */}
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">Price:</p>
                <p className="text-end text-balance text-md font-semibold text-gray-500">
                  ৳ {data[0]?.price}
                </p>
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">Discount:</p>
                <p className="text-end text-balance  text-md font-semibold text-red-500">
                  {data[0]?.discount}%
                </p>
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">
                  Net Price:
                </p>
                <p className="text-end text-balance  text-md font-semibold text-red-500">
                  ৳
                  {Math.round(
                    data[0]?.price - (data[0]?.price * data[0]?.discount) / 100
                  )}
                </p>
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">Category:</p>
                <p className="text-end text-balance text-sm text-gray-500">
                  {data[0]?.category}
                </p>
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">
                  Sub Category:
                </p>
                <p className="text-end text-balance text-sm text-gray-500">
                  {data[0]?.subCategory}
                </p>
              </div>
              <Separator />
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-sm">Tag:</p>
                <p className="text-end text-balance text-sm text-gray-500">
                  {data[0]?.tag}
                </p>
              </div>

              {/* <div className="w-[90%] mx-auto">
                <div className="space-y-3">
                  <p className="text-textprimary font-serif text-[18px]">
                    Please Pick Size:
                  </p>
                  <Select
                    className="w-full"
                    placeholder="Select size"
                    options={productSizeAndStockOptions}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />

                  {selectedOption && <div>Selected size: {selectedOption}</div>}
                </div>
              </div> */}

              <p className=" px-7 mt-4 prose text-balanc text-start">
                সারাদেশে ২-৫ দিনে হোম-ডেলিভারি। একসাথে যত খুশি পণ্য অর্ডার করুন,
                ডেলিভারি চার্জ একই থাকবে । প্রয়োজনে কল করুনঃ
                <span className="font-semibold">+8801821117913</span>
              </p>

              <div className="mt-6">
                {/* <Button
                disabled={!selectedOption}
                className="bg-primary text-white uppercase tracking-wider font-semibold"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product?.data[0],
                      _id: product?.data[0]?._id,
                      size: selectedOption,
                      availableQuantity:availableQuantity,
                      selectQuantity:selectQuantity
                    })
                  )
                }
                block
                icon={<PlusOutlined />}
              >
                ADD TO CART
              </Button> */}

                {/* <Button
                  disabled={
                    !selectedOption || // No size selected
                    availableQuantity <= 0 || // Selected size is out of stock
                    (selectQuantity.length > 0 &&
                      selectQuantity[0].quantity >= availableQuantity) // Selected quantity exceeds available stock
                  }
                  className="bg-primary text-white uppercase tracking-wider font-semibold"
                  onClick={() => {
                    if (availableQuantity <= 0) {
                      alert("Selected size is out of stock");
                    } else if (
                      selectQuantity.length > 0 &&
                      selectQuantity[0].quantity >= availableQuantity
                    ) {
                      alert("Selected quantity exceeds available stock");
                    } else {
                      dispatch(
                        addToCart({
                          ...product?.data[0],
                          _id: product?.data[0]?._id,
                          size: selectedOption,
                        })
                      );
                    }
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  ADD TO CART
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
