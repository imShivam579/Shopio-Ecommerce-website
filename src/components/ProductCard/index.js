import React from "react";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";
function index(product) {
  console.log(product);
  return (
    <div className="product-card" key={product.id}>
      <div className="img-wrapper">
        <img src={product.Product_image_URL} alt="product-image" />
      </div>
      <div className="card-details">
        <div className="card-text-wrapper">
          <NavLink
            to={`/product`}
            className="product-title Text-medium hover-Textline"
          >
            {product.Product_title}
          </NavLink>
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
