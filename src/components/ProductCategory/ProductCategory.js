import React from "react";
import "./ProductCategory.css";
import ProductCard from "../ProductCard";
import { NavLink } from "react-router-dom";
function ProductCategory(category) {
  const { Category_title, Category_product } = category;
  return (
    <div className="productCategory-container">
      <div className="productCategory-wrapper">
        <div className="category-title Heading-h3">{Category_title}</div>
        <div className="category-wrapper">
          {Category_product.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
export function DailyDealsCategory(category) {
  const { Category_title, Category_product } = category;
  return (
    <>
      <div className="productCategory-container DailyDeal-container">
        <div className="DailyDeal-wrapper">
          <div className="category-textWrapper">
            <div className="category-title Heading-h1">{Category_title}</div>
            <div className="category-timer Heading-h3">08 : 32 : 29</div>
          </div>

          <div className="productCategory-wrapper">
            <div className="category-wrapper">
              {Category_product.map((product) => {
                return (
                  <NavLink to="/product">
                    <ProductCard key={product.id} {...product} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCategory;
