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
              <a href="#" className="Text-small">
                privacy policy
              </a>
              <a href="#" className="Text-small">
                terms of sale
              </a>
              <a href="#" className="Text-small">
                terms of use
              </a>
              <a href="#" className="Text-small">
                report abuse & takedown policy
              </a>
              <a href="#" className="Text-small">
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
              <a href="#" className="Text-small">
                blog
              </a>
              <a href="#" className="Text-small">
                sitemap
              </a>
              <a href="#" className="Text-small">
                fAQ
              </a>
              <a href="#" className="Text-small">
                contact us
              </a>
            </div>
          </div>
          <div className="navlinks__container">
            <div className="container--title Text-medium">business</div>
            <div className="navlinks__wrapper">
              <a href="#" className="Text-small">
                sell on shopio
              </a>
              <a href="#" className="Text-small">
                advertise on shopio
              </a>
              <a href="#" className="Text-small">
                media enquiries
              </a>
              <a href="#" className="Text-small">
                be an affiliate
              </a>
              <a href="#" className="Text-small">
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
