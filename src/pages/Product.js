import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductDetails from "../components/ProductDetails";
import ProductReviewAndRating from "../components/ProductReviewAndRating";
import product_Category_Data from "../ProductCategoryData.json";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import Footer from "../components/Footer";
function Product() {
  const Products = product_Category_Data.map((response) => response);
  const LatestProducts = Products.find((data) => {
    return data.Category_title === "Latest Products";
  });
  return (
    <>
      <Navbar />
      <ProductDetails />
      <ProductReviewAndRating />
      <ProductCategory {...LatestProducts} />
      <Footer />
    </>
  );
}

export default Product;
