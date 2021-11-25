import React from "react";
import "./ProductHighlight.css";
function ProductHighlight() {
  return (
    <>
      <div className="highlight-carousel ">
        <button className="carousel__button carousel__button--left">
          <i class="far fa-chevron-left"></i>
        </button>
        <div className="carousel__track-container">
          <ul className="carousel__track ">
            <li className="carousel__slide">
              <img
                className="carousel__image "
                src="./images/productHighlight-1.png"
                alt=""
                srcset=""
              />
            </li>
            <li className="carousel__slide">
              <img
                className="carousel__image"
                src="./images/productHighlight-1.png"
                alt=""
                srcset=""
              />
            </li>
            <li className="carousel__slide">
              <img
                className="carousel__image"
                src="./images/productHighlight-1.png"
                alt=""
                srcset=""
              />
            </li>
          </ul>
        </div>
        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
        <button className="carousel__button carousel__button--right">
          <i class="far fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default ProductHighlight;
