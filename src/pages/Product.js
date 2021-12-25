import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductDetails from "../components/ProductDetails";
import ProductReviewAndRating from "../components/ProductReviewAndRating";
import product_Category_Data from "../ProductCategoryData.json";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
function Product() {
  const Products = product_Category_Data.map((response) => response);
  const LatestProducts = Products.find((data) => {
    return data.Category_title === "Latest Products";
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProductDetails />
      <ProductReviewAndRating />
      <ProductCategory {...LatestProducts} />
      <Footer />
    </>
  );
}

export default Product;
