// "use client";

// import assets from "@/app/assets";
// import MyDialog from "@/components/shadcn/MyDialog";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { truncateTitle } from "@/utils/truncateTitle";
// import { Diff } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import QuickViewProduct from "../quickViewProduct/QuickViewProduct";

// const ProductCard = ({ product }) => {
//   const router = useRouter();
//   const shortTitle = truncateTitle(product?.name, 20);

//   const handleDetails = () => {
//     router.push(`blogs/details/${product?._id}`);
//   };

//   return (
//     <Card
//       onClick={handleDetails}
//       className={cn(
//         "group mx-auto w-72 transform overflow-hidden hover:cursor-pointer rounded-lg shadow-md"
//       )}
//     >
//       {/* <div className="w-full overflow-hidden relative">
//         <Image
//           className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//           src={product?.images[0]}
//           alt="Product Image"
//           width={400}
//           height={300}
//           layout="responsive"
//         />
//         <div>
//           <Image src={assets.images.addShoppingBag} alt="add-shopping" width={40} height={40} className="bg-primary hidden group-hover:flex" />
//         </div>
//       </div> */}

//       <div className="w-full overflow-hidden relative group">
//         <Image
//           className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//           src={product?.images[0]}
//           alt="Product Image"
//           width={400}
//           height={300}
//           layout="responsive"
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
//           <Image
//             src={assets.images.addShoppingBag}
//             alt="add-shopping"
//             width={40}
//             height={40}
//             className="flex"
//             onClick={handleDetails}
//           />

//           <MyDialog
//             onClick={(e) => e.stopPropagation()}
//             triggerButton={<Button>Quick View</Button>}
//           >
//             <QuickViewProduct />
//           </MyDialog>
//         </div>
//       </div>

//       <div className="p-2">
//         <h2 className="text-md font-medium  text-gray-700 capitalize">
//           {shortTitle}
//         </h2>
//         <div className="flex items-center">
//           <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
//             $20.00
//           </p>
//           <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
//             $25.00
//           </p>
//           <p className="ml-auto text-base font-medium text-primary">20% off</p>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default ProductCard;


"use client";

import assets from "@/app/assets";
import MyDialog from "@/components/shadcn/MyDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { truncateTitle } from "@/utils/truncateTitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import QuickViewProduct from "../quickViewProduct/QuickViewProduct";
import { Diff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TProduct } from "@/types/product.type";

const ProductCard = ({ product }:{product:TProduct}) => {
  const router = useRouter();
  const shortTitle = truncateTitle(product?.name, 20);

  const handleDetails = (e) => {
    // Prevent click event propagation to avoid conflicts with the modal
    e.stopPropagation();
    router.push(`blogs/details/${product?._id}`);
  };

  const handleQuickView = (e) => {
    // Prevent click event propagation to avoid triggering the onClick for the card
    e.stopPropagation();
  };

  return (
    <Card
      onClick={handleDetails}
      className={cn(
        "group mx-auto w-72 transform overflow-hidden hover:cursor-pointer rounded-lg shadow-md"
      )}
    >
      <div className="w-full overflow-hidden relative group">
        <Image
          className="object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={product?.images[0]}
          alt="Product Image"
          width={400}
          height={300}
          layout="responsive"
        />
        {product?.discount && product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% Off
          </div>
        )}

        <div className="absolute hidden top-20  inset-0 group-hover:flex  items-center justify-center  transition-all duration-500 ease-in-out">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={assets.images.addShoppingBag}
                  alt="add-shopping"
                  width={40}
                  height={40}
                  className="flex hover:scale-110 transition-all duration-300"
                  onClick={handleDetails}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Select the item</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* <Diff onClick={handleDetails} color="#811d1d" /> */}
          <div onClick={(e) => e.stopPropagation()}>
            <MyDialog
              triggerButton={
                <Button className="ml-4" variant="outline">
                  Quick View
                </Button>
              }
            >
              <QuickViewProduct product={product} />
            </MyDialog>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-md font-medium text-gray-700 capitalize">
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

