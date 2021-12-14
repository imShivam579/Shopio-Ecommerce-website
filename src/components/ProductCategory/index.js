import ProductCategory, { DailyDealsCategory } from "./ProductCategory";
import React, { Component } from "react";
import product_Category_Data from "../../ProductCategoryData.json";
export default class index extends Component {
  render() {
    const Products = product_Category_Data.map((response) => response);
    const PopularProducts = Products.find((data) => {
      return data.Category_title === "Popular Products";
    });
    const FeaturedProducts = Products.find((data) => {
      return data.Category_title === "Featured Products";
    });
    const LatestProducts = Products.find((data) => {
      return data.Category_title === "Latest Products";
    });
    const Deal_O_T_Day = Products.find((data) => {
      return data.Category_title === "Deals of the Day";
    });
    return (
      <>
        <ProductCategory {...PopularProducts} />
        <ProductCategory {...FeaturedProducts} />
        <DailyDealsCategory {...Deal_O_T_Day} />
        <ProductCategory {...LatestProducts} />
      </>
    );
  }
}
