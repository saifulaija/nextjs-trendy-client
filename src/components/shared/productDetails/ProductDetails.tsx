// "use client";

// import { useGetSingleProductQuery } from "@/redux/api/features/product/productApi";
// import React from "react";
// import CustomLoader from "../customLoader/CustomLoader";

// interface ProductDetailsProps {
//   id: string;
// }

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Slash } from "lucide-react";
// import ImageSlide from "./Imageslide";

// import { formateMoney } from "@/utils/formateMoney";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Separator } from "@/components/ui/separator";

// const ProductDetails = ({ id }: ProductDetailsProps) => {
//   const { data, isLoading, error } = useGetSingleProductQuery(id);
//   console.log(data);
  

//   return (
//     <div className="w-full">
//       {isLoading ? (
//         <CustomLoader />
//       ) : (
//         <div className="container mx-auto">
//           <div className="mt-3">
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator>
//                   <Slash />
//                 </BreadcrumbSeparator>
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>product</BreadcrumbPage>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator>
//                   <Slash />
//                 </BreadcrumbSeparator>
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Details</BreadcrumbPage>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator>
//                   <Slash />
//                 </BreadcrumbSeparator>
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>{data[0]?.name}</BreadcrumbPage>
//                 </BreadcrumbItem>
//                 {/* {q && (
//               <>
//                 <BreadcrumbSeparator>
//                   <Slash />
//                 </BreadcrumbSeparator>
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>{q}</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </>
//             )} */}
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>

//           <div className="md:flex md:justify-center md:items-center md:gap-2 space-x-5 rounded mt-10">
//             <div className="md:max-w-[40%] bg-white  pl-20 md:lg:pl:0 md:lg:p:0 ">
//               <ImageSlide images={data[0]?.images} />
//             </div>
//             <Card className={cn("max-w-[90%] md:max-w-[60%]")}>
//               <div className="py-5 flex justify-evenly items-center">
//                 <h4 className="text-lg text-balance md:text-xl text-center font-semibold text-primary capitalize mb-0">
//                   {data[0]?.name}
//                 </h4>
//                 {/* <div className="flex justify-center items-center gap-2">
//                   <Rate
//                     disabled
//                     value={avgRating}
//                     className="text-yellow-400"
//                   />
//                   <p>({product?.data[0]?.reviews?.length}) Reviews</p>
//                 </div> */}
//               </div>
//               <Separator />
//               <div className="flex justify-between items-center px-10 py-1">
//                 <p className="text-gray-600 font-semibold text-sm">Price:</p>
//                 <p className="text-end text-balance text-md font-semibold text-gray-500">
//                   {formateMoney(data[0]?.price)}
//                 </p>
//               </div>
//               <Separator />
//               <div className="flex justify-between items-center px-10 py-1">
//                 <p className="text-gray-600 font-semibold text-sm">Discount:</p>
//                 <p className="text-end text-balance  text-md font-semibold text-red-500">
//                   {data[0]?.discount}%
//                 </p>
//               </div>
//               <Separator />
//               <div className="flex justify-between items-center px-10 py-1">
//                 <p className="text-gray-600 font-semibold text-sm">
//                   Net Price:
//                 </p>
//                 <p className="text-end text-balance text-md font-semibold text-red-500">
//                   {formateMoney(
//                     Math.round(
//                       data[0]?.price -
//                         (data[0]?.price * data[0]?.discount) / 100
//                     )
//                   )}
//                 </p>
//               </div>
//               <Separator />
              // <div className="flex justify-between items-center px-10 py-1">
              //   <p className="text-gray-600 font-semibold text-sm">Category:</p>
              //   <p className="text-end text-balance text-sm text-gray-500">
              //     {data[0]?.category}
              //   </p>
              // </div>
              // <Separator />
              // <div className="flex justify-between items-center px-10 py-1">
              //   <p className="text-gray-600 font-semibold text-sm">
              //     Sub Category:
              //   </p>
              //   <p className="text-end text-balance text-sm text-gray-500">
              //     {data[0]?.subCategory}
              //   </p>
              // </div>
              // <Separator />
              // <div className="flex justify-between items-center px-10 py-1">
              //   <p className="text-gray-600 font-semibold text-sm">Tag:</p>
              //   <p className="text-end text-balance text-sm text-gray-500">
              //     {data[0]?.tag}
              //   </p>
              // </div>
              // <Separator />

//               <div className="p-4">
//                 <p className="text-[20px] font-semibold text-primary text-center ">Select size and color</p>
//                 <div>

//                 </div>
//               </div>

//               <p className=" px-7 mt-4 prose text-balanc text-start">
//                 সারাদেশে ২-৫ দিনে হোম-ডেলিভারি। একসাথে যত খুশি পণ্য অর্ডার করুন,
//                 ডেলিভারি চার্জ একই থাকবে । প্রয়োজনে কল করুনঃ
//                 <span className="font-semibold">+8801821117913</span>
//               </p>

//               <div className="mt-6">
//                 {/* <Button
//                 disabled={!selectedOption}
//                 className="bg-primary text-white uppercase tracking-wider font-semibold"
//                 onClick={() =>
//                   dispatch(
//                     addToCart({
//                       ...product?.data[0],
//                       _id: product?.data[0]?._id,
//                       size: selectedOption,
//                       availableQuantity:availableQuantity,
//                       selectQuantity:selectQuantity
//                     })
//                   )
//                 }
//                 block
//                 icon={<PlusOutlined />}
//               >
//                 ADD TO CART
//               </Button> */}

//                 {/* <Button
//                   disabled={
//                     !selectedOption || // No size selected
//                     availableQuantity <= 0 || // Selected size is out of stock
//                     (selectQuantity.length > 0 &&
//                       selectQuantity[0].quantity >= availableQuantity) // Selected quantity exceeds available stock
//                   }
//                   className="bg-primary text-white uppercase tracking-wider font-semibold"
//                   onClick={() => {
//                     if (availableQuantity <= 0) {
//                       alert("Selected size is out of stock");
//                     } else if (
//                       selectQuantity.length > 0 &&
//                       selectQuantity[0].quantity >= availableQuantity
//                     ) {
//                       alert("Selected quantity exceeds available stock");
//                     } else {
//                       dispatch(
//                         addToCart({
//                           ...product?.data[0],
//                           _id: product?.data[0]?._id,
//                           size: selectedOption,
//                         })
//                       );
//                     }
//                   }}
//                   block
//                   icon={<PlusOutlined />}
//                 >
//                   ADD TO CART
//                 </Button> */}
//               </div>
//             </Card>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;


"use client";

import { useGetSingleProductQuery } from "@/redux/api/features/product/productApi";
import React, { useState } from "react";
import CustomLoader from "../customLoader/CustomLoader";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Plus, Slash } from "lucide-react";
import ImageSlide from "./Imageslide";
import { formateMoney } from "@/utils/formateMoney";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

interface ProductDetailsProps {
  id: string;
}

const ProductDetails = ({ id }: ProductDetailsProps) => {
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (isLoading) {
    return <CustomLoader />;
  }

  const availableSizes = data[0]?.sizeStockColor?.filter((sizeItem) =>
    sizeItem.colorsStock.some((colorItem) => colorItem.quantity > 0)
  );

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="mt-3">
          <Breadcrumb>
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
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="md:flex md:justify-center md:items-center md:gap-2 space-x-5 rounded mt-10">
          <div className="md:max-w-[40%] bg-white pl-20 md:lg:pl:0 md:lg:p:0 ">
            <ImageSlide images={data[0]?.images} />
          </div>
          <Card className={cn("max-w-[90%] md:max-w-[60%]")}>
            <div className="py-5 flex justify-evenly items-center">
              <h4 className="text-lg text-balance md:text-xl text-center font-semibold text-primary capitalize mb-0">
                {data[0]?.name}
              </h4>
            </div>
            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">Price</p>
              <p className="text-end text-balance text-md font-semibold text-gray-500">
                {formateMoney(data[0]?.price)}
              </p>
            </div>
            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">Discount</p>
              <p className="text-end text-balance text-md font-semibold text-red-500">
                -{data[0]?.discount}%
              </p>
            </div>
            <Separator />
            {data[0]?.discount > 0 && (
              <div className="flex justify-between items-center px-10 py-1">
                <p className="text-gray-600 font-semibold text-md">
                  Save Amount
                </p>
                <p className="text-end text-balance text-md font-semibold text-red-500">
                  {formateMoney(
                    Math.round(
                      data[0]?.price -
                        (data[0]?.price -
                          (data[0]?.price * data[0]?.discount) / 100)
                    )
                  )}
                </p>
              </div>
            )}
            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">Net Price</p>
              <p className="text-end text-balance text-md font-semibold text-red-500">
                {formateMoney(
                  Math.round(
                    data[0]?.price - (data[0]?.price * data[0]?.discount) / 100
                  )
                )}
              </p>
            </div>

            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">Category</p>
              <p className="text-end text-balance text-md font-semibold text-gray-500 capitalize">
                {data[0]?.category}
              </p>
            </div>
            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">
                Sub Category
              </p>
              <p className="text-end text-balance text-md font-semibold text-gray-500 capitalize">
                {data[0]?.subCategory}
              </p>
            </div>
            <Separator />
            <div className="flex justify-between items-center px-10 py-1">
              <p className="text-gray-600 font-semibold text-md">Tag:</p>
              <p className="text-end text-balance text-sm text-gray-500">
                {data[0]?.tag}
              </p>
            </div>
            <Separator />

            <div className="p-4">
              <p className="text-[20px] font-semibold text-primary text-center mb-4">
                Select Size and Color
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Available Sizes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes?.map((sizeItem) => (
                      <Button
                        key={sizeItem.size}
                        variant={
                          selectedSize === sizeItem.size ? "primary" : "outline"
                        }
                        onClick={() => setSelectedSize(sizeItem.size)}
                        disabled={
                          !sizeItem.colorsStock.some(
                            (colorItem) => colorItem.quantity > 0
                          )
                        }
                        className={cn(
                          "px-3 py-1 rounded",
                          selectedSize === sizeItem.size
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-600"
                        )}
                      >
                        {sizeItem.size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold mb-2">
                    Available Colors:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data[0]?.sizeStockColor
                      .find((sizeItem) => sizeItem.size === selectedSize)
                      ?.colorsStock.map((colorItem) => (
                        <Button
                          key={colorItem.color}
                          variant={
                            selectedColor === colorItem.color
                              ? "primary"
                              : "outline"
                          }
                          onClick={() => setSelectedColor(colorItem.color)}
                          disabled={colorItem.quantity === 0}
                          className={cn(
                            "px-3 py-3 rounded-full",
                            selectedColor === colorItem.color
                              ? "bg-primary text-white"
                              : "bg-gray-200 text-gray-600",
                            colorItem.quantity === 0 &&
                              "line-through opacity-50 cursor-not-allowed"
                          )}
                        >
                          {colorItem.color}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="px-7 mt-4 prose text-balance text-start">
              সারাদেশে ২-৫ দিনে হোম-ডেলিভারি। একসাথে যত খুশি পণ্য অর্ডার করুন,
              ডেলিভারি চার্জ একই থাকবে । প্রয়োজনে কল করুনঃ
              <span className="font-semibold">+8801821117913</span>
            </p>

            {/* <div className="mt-6 flex justify-center">
              <Button
                disabled={!selectedSize || !selectedColor}
                className={cn(
                  "w-full text-white uppercase tracking-wider font-semibold flex items-center justify-center"
                )}
                asChild
              >
                <span className="flex items-center gap-2">
                  <Plus color="#f6efef" />
                  ADD TO CART
                </span>
              </Button>
            </div> */}

            <div className="mt-6 flex justify-center">
              <Button
                disabled={!selectedSize || !selectedColor}
                className={cn(
                  "w-full text-white uppercase tracking-wider font-semibold flex items-center justify-center",
                  {
                    "opacity-50 cursor-not-allowed":
                      !selectedSize || !selectedColor, // Apply opacity and disable cursor when disabled
                    "opacity-100": selectedSize && selectedColor, // Full opacity when enabled
                  }
                )}
                asChild
              >
                <span className="flex items-center gap-2">
                  <Plus color="#f6efef" />
                  ADD TO CART
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

