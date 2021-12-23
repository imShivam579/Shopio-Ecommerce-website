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
          <a className="product-title Text-medium hover-Textline" href="#">
            {product.Product_title}
          </a>
        </div>
        <div className="product-review">
          <div className="product-rating">
            <div className="reviewWrapper--starCount">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fal fa-star"></i>
            </div>
          </div>
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
