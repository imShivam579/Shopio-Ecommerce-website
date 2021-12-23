import React, { useState } from "react";
import { Description, Features, Details } from "./ContentTypeData";
import "./style.css";

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

function ProductReviewAndRating() {
  const [ratingDetail, changeRatingDetail] = useState({
    RatingPoints: "4.0",
    RatingRatio: [
      { title: "5 Star", ratingPercentage: 65 },
      { title: "4 Star", ratingPercentage: 45 },
      { title: "3 Star", ratingPercentage: 18 },
      { title: "2 Star", ratingPercentage: 8 },
      { title: "1 Star", ratingPercentage: 12 },
    ],
  });
  const [activeBarPosition, changeActiveBarPosition] = useState("left");
  const [expandContent, setExpandContent] = useState(false);
  const [visibleContentType, setVisibleContentType] = useState("Description");
  const [activeLinkCurrentWidth, setActiveLinkCurrentWidth] = useState(120);
  const [activeLinkCurrentPosition, setActiveLinkCurrentPosition] = useState(0);
  const [detailState, changeDetailState] = useState({
    activeTitle: "Description",
    titleObject: [
      { title: "Description" },
      { title: "Features" },
      { title: "Details" },
    ],
    activeLinkCurrentPosition: 0,
    activeLinkCurrentWidth: 120,
    visibleDetailOf: "Description",
  });
  const activateLink = (current_activeLink_width, index, title) => {
    setActiveLinkCurrentWidth(current_activeLink_width);
    setVisibleContentType(title);
    title === "Description"
      ? setActiveLinkCurrentPosition(0)
      : title === "Features"
      ? setActiveLinkCurrentPosition(45)
      : title === "Details"
      ? setActiveLinkCurrentPosition(86)
      : setActiveLinkCurrentPosition(0);
    toggleActive(index);
  };
  function toggleActive(index) {
    changeDetailState({
      ...detailState,
      activeTitle: detailState.titleObject[index].title,
    });
  }
  function toggleActiveStyle(index) {
    if (detailState.titleObject[index].title === detailState.activeTitle) {
      return "active";
    } else {
      return null;
    }
  }
  function toggleContentView() {
    if (expandContent) {
      return "MoreDetail--text Text-medium expand-content";
    } else {
      return "MoreDetail--text Text-medium ";
    }
  }
  return (
    <>
      <div className="product__container product__ReviewAndMoreDetail">
        <div className="product__ReviewAndMoreDetail--wrapper product__container--wrapper">
          <div className="product__ReviewAndRating--wrapper">
            <div className="ReviewAndRating__title--wrapper">
              <ul className="Text-medium">
                <li>Customer Reviews</li>
              </ul>
            </div>
            <div className="product__Rating--wrapper">
              <div className="Rating__count--wrapper">
                <div className="Rating__count ">
                  {ratingDetail.RatingPoints}
                </div>
                <div className="reviewWrapper--starCount">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fal fa-star"></i>
                </div>
              </div>
              <div className="Rating__countPercentile--wrapper">
                {ratingDetail.RatingRatio.map((element, index) => {
                  const title = element.title;
                  const ratingPercentage = element.ratingPercentage;
                  return (
                    <div className="countPercentile__wrapper" key={index}>
                      <span className="countPercentile__wrapper--text countPercentile--star Text-medium">
                        {title}
                      </span>
                      <div className="countPercentile__parentBar">
                        <div
                          style={{ width: ratingPercentage + "%" }}
                          className="countPercentile__parentBar--progressBar"
                        ></div>
                      </div>
                      <span className="countPercentile__wrapper--text countPercentile--percentage Text-medium">
                        {ratingPercentage}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="product__MoreDetail--wrapper">
            <div className="ReviewAndRating__title--wrapper ">
              <ul className="Text-medium">
                {detailState.titleObject.map((element, index) => (
                  <li
                    key={index}
                    onClick={(e) => {
                      let ReviewAndRatingTitle_width = e.target.clientWidth;
                      let current_activeLink_width = `${
                        ReviewAndRatingTitle_width + 20
                      }`;
                      activateLink(
                        current_activeLink_width,
                        index,
                        element.title
                      );
                    }}
                    className={toggleActiveStyle(index)}
                  >
                    {element.title}
                  </li>
                ))}
              </ul>

              <div
                className="contentLink"
                style={{
                  width: activeLinkCurrentWidth + "px",
                  left: activeLinkCurrentPosition + "%",
                }}
              ></div>
            </div>
            <div className="MoreDetail--textWrapper">
              <div className={toggleContentView()}>
                {showVisibleContent(visibleContentType)}
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
        </div>
      </div>
    </>
  );
}

export default ProductReviewAndRating;
