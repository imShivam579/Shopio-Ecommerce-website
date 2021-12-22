import React from "react";
import "./style.css";
function index() {
  return (
    <>
      <div className="product__container">
        <div className="product__detail--wrapper product__container--wrapper">
          <div className="product__image--wrapper">
            <img src="./images/product-img.png" alt="Product-image" srcSet="" />
          </div>
          <div className="productDetail__wrapper">
            <div className="productDetail__section">
              <div className="productDetail__textWrapper">
                <div
                  className="productDetail__productTag Text-medium"
                  onClick={(e) => console.log(e.pageX)}
                >
                  Electronic
                </div>
                <h3 className="textWrapper--title Heading-h3">
                  boAt Stone 180 5W Bluetooth Speaker, 1.75" Driver, IPX7 and
                  TWS Feature(Black)
                </h3>
              </div>
              <div className="productDetail__priceAndReviewWrapper">
                <div className="productDetail__priceWrapper">
                  <div className="priceWrapper--originalPrice Text-medium">
                    $180
                  </div>
                  <div className="priceWrapper--currentPrice Heading-h3">
                    $110
                  </div>
                </div>
                <div className="productDetail__reviewAndStarWrapper">
                  <div className="reviewWrapper--starCount">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fal fa-star"></i>
                  </div>
                  <span className="Text-medium reviewWrapper--reviewCount">
                    123 Review
                  </span>
                </div>
              </div>
            </div>
            <div className="productDetail__section">
              <div className="productDetail__textWrapper">
                <div className="textWrapper--description Text-medium ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  nulla risus pellentesque tempor vel cras. Venenatis et diam
                  vitae semper faucibus sit eleifend fringilla. Sed pellentesque
                  aliquam enim nulla sit placerat. Turpis maecenas purus mauris
                  nec velit. Amet vulputate diam vel posuere donec consectetur.
                  Gravida purus placerat consequat sagittis.
                </div>
              </div>
            </div>
            <div className="productDetail__section">
              <div className="productDetail__productCountity">
                <div className="productCountity--wrapper">
                  <div className="productCountity--wrapperTitle Text-large">
                    Quantity
                  </div>
                  <div className="productCountity--counter">
                    <button className="productCountity--border ">
                      <i className="far fa-plus"></i>
                    </button>
                    <input
                      className="productCountity--border Text-medium"
                      type="number"
                      name=""
                      id=""
                      defaultValue={1}
                    />
                    <button className="productCountity--border">
                      <i className="far fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="productCountity--wrapper">
                  <div className="productCountity--wrapperTitle Text-large">
                    Total
                  </div>
                  <div className="productCountity--countityTotal productCountity--border Text-medium">
                    $110
                  </div>
                </div>
              </div>
            </div>
            <div className="productDetail__section">
              <div className="productDetail__CTA ">
                <button className="CTA__button CTA__button--secondary Text-medium ">
                  Add to cart
                </button>
                <button className="CTA__button Text-medium">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
