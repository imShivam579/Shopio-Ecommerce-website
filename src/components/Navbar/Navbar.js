import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <header id="header">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src="./images/logo.png" alt="logo" className="brand-logo" />
          </div>
          <div className="searchbar-wrapper" id="searchbarWrapper">
            <input
              className="Text-medium"
              id="inputBox"
              type="text"
              placeholder="Search products & brands.."
              onClick={() => activeBorder()}
            />
            <button type="submit">
              <i class="fal fa-search"></i>
            </button>
          </div>
          <div className="nav-menu-wrapper">
            <ul>
              <li>
                <a href="#" id="user-log" className="Text-medium">
                  <i class="fal fa-user-alt"></i>Sign Up\Login
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <a href="#" id="burgerMenu-icon">
                  <i class="far fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
  function activeBorder() {
    let element = document.getElementById("searchbarWrapper");
    element.classList.add("active");
  }
}

export default Navbar;
