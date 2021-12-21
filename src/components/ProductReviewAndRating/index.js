import React, { useState } from "react";
import { Description, Features, Details } from "./ContentTypeData";
import "./style.css";

function ProductReviewAndRating() {
  const [oneStarRating, setOneStarRating] = useState("12%");
  const [twoStarRating, setTwoStarRating] = useState("8%");
  const [threeStarRating, setThreeStarRating] = useState("18%");
  const [fourStarRating, setFourStarRating] = useState("45%");
  const [fiveStarRating, setFiveStarRating] = useState("65%");
  const [visibleContentType, setVisibleContentType] = useState("Description");
  function showVisibleContent(ContentType) {
    switch (ContentType) {
      case "Description":
        return Description();
      case "Features":
        return Features();
      case "Details":
        return Details();
      default:
        return ContentType;
    }
  }

  return (
    <>
      <div className="product__container product__ReviewAndMoreDetail">
        <div className="product__ReviewAndMoreDetail--wrapper product__container--wrapper">
          <div className="product__ReviewAndRating--wrapper">
            <div className="ReviewAndRating__title--wrapper">
              <ul>
                <li className="ReviewAndRating__title Text-medium">
                  Customer Reviews
                </li>
              </ul>
            </div>
            <div className="product__Rating--wrapper">
              <div className="Rating__count--wrapper">
                <div className="Rating__count ">4.0</div>
                <div class="reviewWrapper--starCount">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fal fa-star"></i>
                </div>
              </div>
              <div className="Rating__countPercentile--wrapper">
                <div className="countPercentile__wrapper">
                  <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                    5 Star
                  </span>
                  <div className="countPercentile__parentBar">
                    <div
                      style={{ width: fiveStarRating }}
                      className="countPercentile__parentBar--progressBar"
                    ></div>
                  </div>
                  <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                    {fiveStarRating}
                  </span>
                </div>
                <div className="countPercentile__wrapper">
                  <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                    4 Star
                  </span>
                  <div className="countPercentile__parentBar">
                    <div
                      style={{ width: fourStarRating }}
                      className="countPercentile__parentBar--progressBar"
                    ></div>
                  </div>
                  <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                    {fourStarRating}
                  </span>
                </div>
                <div className="countPercentile__wrapper">
                  <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                    3 Star
                  </span>
                  <div className="countPercentile__parentBar">
                    <div
                      style={{ width: threeStarRating }}
                      className="countPercentile__parentBar--progressBar"
                    ></div>
                  </div>
                  <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                    {threeStarRating}
                  </span>
                </div>
                <div className="countPercentile__wrapper">
                  <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                    2 Star
                  </span>
                  <div className="countPercentile__parentBar">
                    <div
                      style={{ width: twoStarRating }}
                      className="countPercentile__parentBar--progressBar"
                    ></div>
                  </div>
                  <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                    {twoStarRating}
                  </span>
                </div>
                <div className="countPercentile__wrapper">
                  <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                    1 Star
                  </span>
                  <div className="countPercentile__parentBar">
                    <div
                      style={{ width: oneStarRating }}
                      className="countPercentile__parentBar--progressBar"
                    ></div>
                  </div>
                  <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                    {oneStarRating}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="product__MoreDetail--wrapper">
            <div className="ReviewAndRating__title--wrapper contentLink">
              <ul>
                <li
                  className="ReviewAndRating__title Text-medium"
                  onClick={(e) => {
                    let ReviewAndRatingTitle_width = e.target.clientWidth;
                    let current_activeLink_width = `${
                      ReviewAndRatingTitle_width + 20
                    }px`;
                    console.log(
                      "current_activeLink_width",
                      current_activeLink_width
                    );
                    console.log(e.target.classList.add("active"));
                    console.log(e);
                    setVisibleContentType(e.target.innerHTML);
                  }}
                >
                  Description
                </li>
                <li
                  className="ReviewAndRating__title Text-medium"
                  onClick={(e) => {
                    console.log(e);
                    setVisibleContentType(e.target.innerHTML);
                  }}
                >
                  Features
                </li>
                <li
                  className="ReviewAndRating__title Text-medium"
                  onClick={(e) => {
                    setVisibleContentType(e.target.innerHTML);
                  }}
                >
                  Details
                </li>
              </ul>
            </div>
            <div className="MoreDetail--textWrapper">
              <div class="MoreDetail--text Text-medium">
                {showVisibleContent(visibleContentType)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReviewAndRating;
