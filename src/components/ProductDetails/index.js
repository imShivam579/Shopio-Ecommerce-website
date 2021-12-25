import React, { useState } from "react";
import "./style.css";

function ProductDetail() {
  const [productDetails, changeProductDetails] = useState({
    productTitle: "title",
    productDescription: "Description",
    productOriginalPrice: 119,
    productDiscountPrice: 20,
    productCurrentPrice: 99,
    productCount: 1,
    productGrandTotal: 99,
  });
  const [expandContent, setExpandContent] = useState(false);
  function toggleContentView() {
    if (expandContent) {
      return "textWrapper--description Text-medium  expand-content";
    } else {
      return "textWrapper--description Text-medium  ";
    }
  }

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
                    ${productDetails.productOriginalPrice}
                  </div>
                  <div className="priceWrapper--currentPrice Heading-h3">
                    ${productDetails.productCurrentPrice}
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
                <div className={toggleContentView()}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  nulla risus pellentesque tempor vel cras. Venenatis et diam
                  vitae semper faucibus sit eleifend fringilla. Sed pellentesque
                  aliquam enim nulla sit placerat. Turpis maecenas purus mauris
                  nec velit. Amet vulputate diam vel posuere donec consectetur.
                  Gravida purus placerat consequat sagittis.
                </div>
                <span
                  className="expandContent-btn Text-medium"
                  onClick={() => {
                    setExpandContent(!expandContent);
                  }}
                >
                  {expandContent ? "show less." : "read more..."}
                </span>
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
                      <i
                        className="far fa-plus"
                        onClick={() => {
                          productDetails.productCount < 100
                            ? changeProductDetails({
                                ...productDetails,
                                productCount: productDetails.productCount + 1,
                              })
                            : console.log("greater then 99");
                        }}
                      ></i>
                    </button>
                    <input
                      className="productCountity--border Text-medium"
                      type="number"
                      value={productDetails.productCount}
                      onChange={(e) => {
                        e.target.value > 99
                          ? console.log("greater then 99")
                          : e.target.value < 1
                          ? console.log("smaller then one")
                          : changeProductDetails({
                              ...productDetails,
                              productCount: parseInt(e.target.value),
                            });
                      }}
                    />
                    <button className="productCountity--border">
                      <i
                        className="far fa-minus"
                        onClick={() => {
                          productDetails.productCount <= 1
                            ? console.log("smaller then 1")
                            : changeProductDetails({
                                ...productDetails,
                                productCount: productDetails.productCount - 1,
                              });
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="productCountity--wrapper">
                  <div className="productCountity--wrapperTitle Text-large">
                    Total
                  </div>
                  <div className="productCountity--countityTotal productCountity--border Text-medium">
                    $
                    {productDetails.productCount === 0 ||
                    productDetails.productCount === null ||
                    productDetails.productCount === undefined ||
                    productDetails.productCount === NaN
                      ? (productDetails.productGrandTotal = 0)
                      : (productDetails.productGrandTotal =
                          productDetails.productCurrentPrice *
                          productDetails.productCount)}
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

export default ProductDetail;
