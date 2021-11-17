import React from "react";
import "./ProductCategory.css";
import ProductCard from "../ProductCard";
function ProductCategory() {
  return (
    <div className="productCategory-container section">
      <div className="productCategory-wrapper wrapper">
        <div className="category-title Heading-h3">Popular Products</div>
        <div className="category-wrapper">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
