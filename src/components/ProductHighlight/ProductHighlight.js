import React from "react";
import "./ProductHighlight.css";
import Carousel from "react-bootstrap/Carousel";
function ProductHighlight(Highlights) {
  const Category_products = Highlights.Category_product;
  return (
    <>
      <Carousel className="carousel__contianer" controls={false}>
        {Category_products.map((product) => {
          const Img_Alt = product.Product_image_Alt;
          const Img_Url = product.Product_image_URL;
          const Img_Duration = product.Interval_Duration;
          console.log(Img_Url);
          return (
            <Carousel.Item interval={Img_Duration} className="carousel__item">
              <img className="d-block w-100" src={Img_Url} alt={Img_Alt} />
            </Carousel.Item>
          );
        })}
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
