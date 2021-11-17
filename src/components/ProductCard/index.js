import React from "react";
import "./ProductCard.css";
import cardImg from "../../images/ProductCard-img1.png";
function index() {
  return (
    <div className="product-card">
      <div className="card-image image-wrapper">
        <img src={cardImg} alt="product-img" />
      </div>
      <div className="card-details">
        <div className="product-title Text-large">Product Title</div>
        <div className="product-detail Text-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="product-review">
          <div className="product-rating">⭐⭐⭐⭐</div>
          <div className="product-price">$120</div>
        </div>
      </div>
    </div>
  );
}

export default index;
