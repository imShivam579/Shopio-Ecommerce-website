import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/index";
import ProductCategory from "../components/ProductCategory";
import ProductHighlight from "../components/ProductHighlight/ProductHighlight";
import product_Category_Data from "../ProductCategoryData.json";
function Home() {
  const Products = product_Category_Data.map((response) => response);
  const ProductCarousel__Home_Highlight1 = Products.find((data) => {
    return data.Category_title === "ProductCarousel__Home_Highlight1";
  });
  const ProductCarousel__Home_Highlight2 = Products.find((data) => {
    return data.Category_title === "ProductCarousel__Home_Highlight2";
  });
  return (
    <>
      <Navbar />
      <ProductHighlight {...ProductCarousel__Home_Highlight1} />
      <ProductCategory />
      <ProductHighlight {...ProductCarousel__Home_Highlight2} />
      <Footer />
    </>
  );
}

export default Home;
