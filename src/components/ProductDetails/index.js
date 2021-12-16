import React from "react";
import "./style.css";
function index() {
  return (
    <div className="product__detail--container">
      <div className="product__detail--wrapper">
        <div className="product__image--wrapper">
          <img src="./images/product-img.png" alt="Product-image" srcset="" />
        </div>
        <div className="productDetail__wrapper">
          <div className="productDetail__productTag Text-small">Electronic</div>
          <div className="productDetail__textWrapper">
            <div className="textWrapper--title Heading-h3">
              boAt Stone 180 5W Bluetooth Speaker, 1.75" Driver, IPX7 and TWS
              Feature(Black)
            </div>
          </div>
          <div className="productDetail__priceAndReviewWrapper">
            <div className="productDetail__priceWrapper">
              <div className="priceWrapper--currentPrice Heading-h2">$110</div>
              <div className="priceWrapper--originalPrice Text-large">$180</div>
            </div>
            <div className="productDetail__reviewWrapper">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="productDetail__textWrapper">
            <div className="textWrapper--description Text-small ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nulla risus pellentesque tempor vel cras. Venenatis et diam vitae
              semper faucibus sit eleifend fringilla. Temporibus repellendus
              veritatis eveniet animi corporis. Pariatur natus vitae, laudantium
              ea doloribus suscipit cumque ipsa, eaque saepe ratione nobis enim
              obcaecati error
            </div>
          </div>
          <div className="productDetail__productCountity">
            <div className="productCountity--counter">
              <button>
                <i class="far fa-minus"></i>
              </button>
              <input type="number" name="" id="" defaultValue={1} />
              <button>
                <i class="far fa-plus"></i>
              </button>
            </div>
            <div className="productCountity--countityTotal Text-large">
              <span>$180</span> Total
            </div>
          </div>
          <div className="productDetail__CTA ">
            <button className="CTA__button CTA__button--secondary Text-medium ">
              Add to cart
            </button>
            <button className="CTA__button Text-medium">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
