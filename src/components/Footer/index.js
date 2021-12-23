import React from "react";
import "./FooterStyle.css";
function index() {
  return (
    <>
      <footer className="footer__section">
        <div className="footer__wrapper">
          <div className="brandDetail__wrapper">
            <div className="logo__wrapper">
              <img src="./images/logo.png" type="img/svg" alt="Brand__logo" />
            </div>
            <div className="brand-tagline__wrapper Text-small">
              Official Public service announcement on prevention, travel
              advisory and common about coronavirus
            </div>
            <div className="icon__container" id="brand-socialMedia">
              <div className="icon__wrapper">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="icon__wrapper">
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="icon__wrapper">
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="navlinks__container">
            <div className="container--title Text-medium">Policy info</div>
            <div className="navlinks__wrapper">
              <a href="#" className="Text-small hover-line">
                privacy policy
              </a>
              <a href="#" className="Text-small hover-line">
                terms of sale
              </a>
              <a href="#" className="Text-small hover-line">
                terms of use
              </a>
              <a href="#" className="Text-small hover-line">
                report abuse & takedown policy
              </a>
              <a href="#" className="Text-small hover-line">
                cSR policy
              </a>
            </div>
          </div>
          <div className="navlinks__container">
            <div className="container--title Text-medium">company</div>
            <div className="navlinks__wrapper">
              <a href="#" className="Text-small">
                about us
              </a>
              <a href="#" className="Text-small hover-line">
                blog
              </a>
              <a href="#" className="Text-small hover-line">
                sitemap
              </a>
              <a href="#" className="Text-small hover-line">
                fAQ
              </a>
              <a href="#" className="Text-small hover-line">
                contact us
              </a>
            </div>
          </div>
          <div className="navlinks__container">
            <div className="container--title Text-medium">business</div>
            <div className="navlinks__wrapper">
              <a href="#" className="Text-small hover-line">
                sell on shopio
              </a>
              <a href="#" className="Text-small hover-line">
                advertise on shopio
              </a>
              <a href="#" className="Text-small hover-line">
                media enquiries
              </a>
              <a href="#" className="Text-small hover-line">
                be an affiliate
              </a>
              <a href="#" className="Text-small hover-line">
                deal of the day
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__BR--wrapper">
        <div className="footer__BR--text Text-small">
          All Copyrights Reserved @2021
        </div>
      </div>
    </>
  );
}

export default index;
