import React, { useState } from "react";
import ProductDetails from "../components/ProductDetails";
import ProductReviewAndRating from "../components/ProductReviewAndRating";
import product_Category_Data from "../ProductCategoryData.json";
import ProductCategory from "../components/ProductCategory/ProductCategory";
function Product(props) {
  // console.log(props.match.params.id);
  const Products = product_Category_Data.map((response) => response);
  const LatestProducts = Products.find((data) => {
    return data.Category_title === "Latest Products";
  });
  return (
    <>
      <ProductDetails />
      <ProductReviewAndRating />
      <ProductCategory {...LatestProducts} />
    </>
  );
}

export default Product;
