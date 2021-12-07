import React from "react";
import "./ProductHighlight.css";
import Carousel from "react-bootstrap/Carousel";
function ProductHighlight() {
  return (
    <>
      <Carousel className="carousel__contianer" controls={false}>
        <Carousel.Item interval={1000} className="carousel__item">
          <img
            className="d-block w-100"
            src="./images/productHighlight-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500} className="carousel__item">
          <img
            className="d-block w-100"
            src="./images/productHighlight-1.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item className="carousel__item">
          <img
            className="d-block w-100"
            src="./images/productHighlight-1.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ProductHighlight;
{
  /* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */
}
