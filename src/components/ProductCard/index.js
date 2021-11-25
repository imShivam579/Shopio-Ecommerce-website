import React from "react";
import "./ProductCard.css";
function index(product) {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.Product_image_URL} />
      </div>
      <div className="card-details">
        <div className="card-text-wrapper">
          <div className="product-title Text-medium">
            {product.Product_title}
          </div>
        </div>
        <div className="product-review">
          <div className="product-rating">⭐⭐⭐⭐</div>
          <div className="product-price">$ {product.Product_price}</div>
        </div>
        <button>
          <i class="fal fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default index;
