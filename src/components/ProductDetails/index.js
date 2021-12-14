import React from "react";
import "./style.css";
function index() {
  return (
    <div className="product__detail--container">
      <div className="product__detail--wrapper">
        <div className="product__image--wrapper">
          <img src="./images/product.png" alt="Product-image" srcset="" />
        </div>
        <div className="productDetail__wrapper">
          <div className="productDetail__productTag Text-medium">
            {" "}
            Electronic
          </div>
          <div className="productDetail__textWrapper">
            <div className="textWrapper--title Heading-h2">
              boAt Stone 180 5W Bluetooth Speaker, 1.75" Driver, IPX7 and TWS
              Feature(Black)
            </div>
          </div>
          <div className="productDetail__priceWrapper">
            <div className="priceWrapper--currentPrice">$110</div>
            <div className="priceWrapper--originalPrice">$180</div>
          </div>
          <div className="productDetail__textWrapper">
            <div className="textWrapper--description ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nulla risus pellentesque tempor vel cras. Venenatis et diam vitae
              semper faucibus sit eleifend fringilla.{" "}
            </div>
          </div>
          <div className="productDetail__productCountity">
            <div className="productCountity--counter">
              <button>-</button>
              <input type="number" name="" id="" />
              <button>+</button>
            </div>
            <div className="productCountity--countityTotal">$180 Total</div>
          </div>
          <div className="productDetail__CTA">
            <button className="CTA__button">Add to cart</button>
            <button className="CTA__button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
