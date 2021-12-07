import React from "react";
import "./ProductCard.css";
function index(product) {
  return (
    <div className="product-card" key={product.id}>
      <div className="img-wrapper">
        <img src={product.Product_image_URL} alt="product.Product_title" />
      </div>
      <div className="card-details">
        <div className="card-text-wrapper">
          <div className="product-title Text-medium">
            {product.Product_title}
          </div>
        </div>
        <div className="product-review">
          <div className="product-rating">⭐⭐⭐⭐</div>
          <div className="product-price Text-medium">
            $ {product.Product_price}
          </div>
        </div>
        <button>
          <i className="fal fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default index;
