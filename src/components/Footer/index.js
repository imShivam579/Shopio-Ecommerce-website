import React from "react";
import "./FooterStyle.css";
function index() {
  return (
    <footer class="footer__section">
      <div class="footer__wrapper">
        <div class="brandDetail__wrapper">
          <div class="logo__wrapper">
            <img src="./images/logo.png" type="img/svg" alt="Brand__logo" />
          </div>
          <div class="brand-tagline__wrapper Text-small">
            Official Public service announcement on prevention, travel advisory
            and common about coronavirus
          </div>
          <div class="icon__container" id="brand-socialMedia">
            <div class="icon__wrapper">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="icon__wrapper">
              <a href="#">
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div class="icon__wrapper">
              <a href="#">
                {" "}
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="navlinks__container">
          <div class="container--title Text-medium">Policy info</div>
          <div class="navlinks__wrapper">
            <a href="#" class="Text-small">
              privacy policy
            </a>
            <a href="#" class="Text-small">
              terms of sale
            </a>
            <a href="#" class="Text-small">
              terms of use
            </a>
            <a href="#" class="Text-small">
              report abuse & takedown policy
            </a>
            <a href="#" class="Text-small">
              cSR policy
            </a>
          </div>
        </div>
        <div class="navlinks__container">
          <div class="container--title Text-medium">company</div>
          <div class="navlinks__wrapper">
            <a href="#" class="Text-small">
              about us
            </a>
            <a href="#" class="Text-small">
              blog
            </a>
            <a href="#" class="Text-small">
              sitemap
            </a>
            <a href="#" class="Text-small">
              fAQ
            </a>
            <a href="#" class="Text-small">
              contact us
            </a>
          </div>
        </div>
        <div class="navlinks__container">
          <div class="container--title Text-medium">business</div>
          <div class="navlinks__wrapper">
            <a href="#" class="Text-small">
              sell on shopio
            </a>
            <a href="#" class="Text-small">
              advertise on shopio
            </a>
            <a href="#" class="Text-small">
              media enquiries
            </a>
            <a href="#" class="Text-small">
              be an affiliate
            </a>
            <a href="#" class="Text-small">
              deal of the day
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
