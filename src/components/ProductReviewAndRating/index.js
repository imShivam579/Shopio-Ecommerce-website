import React, { useState } from "react";
import "./style.css";

function ProductReviewAndRating() {
  const [oneStarRating, setOneStarRating] = useState("12%");
  const [twoStarRating, setTwoStarRating] = useState("8%");
  const [threeStarRating, setThreeStarRating] = useState("18%");
  const [fourStarRating, setFourStarRating] = useState("45%");
  const [fiveStarRating, setFiveStarRating] = useState("65%");
  return (
    <>
      <div className="product__container product__ReviewAndMoreDetail">
        <div className="product__ReviewAndMoreDetail--wrapper product__container--wrapper">
          <div className="product__ReviewAndRating--wrapper">
            <div className="ReviewAndRating__title--wrapper">
              <span className="ReviewAndRating__title Text-medium">
                Customer Reviews
              </span>
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
            <div className="ReviewAndRating__title--wrapper">
              <span className="ReviewAndRating__title Text-medium">
                Description
              </span>
              <span className="ReviewAndRating__title Text-medium">
                Features
              </span>
              <span className="ReviewAndRating__title Text-medium">
                Details
              </span>
            </div>
            <div className="MoreDetail--textWrapper Text-medium">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu et
                nisi tristique nulla aliquam vitae.
              </p>
              <p>
                Facilisi sem viverra ornare pharetra, metus, volutpat
                sollicitudin eget. Sed pellentesque aliquam enim nulla sit
                placerat. Turpis maecenas purus mauris nec velit. Amet vulputate
                diam vel posuere donec consectetur. Gravida purus placerat
                consequat sagittis.
              </p>

              <p>
                Id at porta cursus dignissim proin sed vulputate gravida quis.
                Nulla at mattis amet, nisi, ac.Turpis maecenas purus mauris nec
                velit. Amet vulputate diam vel posuere donec consectetur.
                Gravida purus placerat consequat sagittis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReviewAndRating;
