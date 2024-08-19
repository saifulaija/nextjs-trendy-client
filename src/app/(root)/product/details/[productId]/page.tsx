import React from "react";
type TParams={
    params:{
        productId:string
    }
}

const ProductDetailsPage = ({params}:TParams) => {
  return <div>ProductDetailsPage {params.productId}</div>;
};

export default ProductDetailsPage;
