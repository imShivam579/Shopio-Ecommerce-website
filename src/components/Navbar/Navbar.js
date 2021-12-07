import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  let [ActiveBorder, setActiveBorder] = useState();
  function activeBorder(onFocus) {
    setActiveBorder(onFocus ? "active" : null);
  }
  return (
    <>
      <header id="header">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src="./images/logo.png" alt="logo" className="brand-logo" />
          </div>
          <div className="searchbar-wrapper" id={ActiveBorder}>
            <input
              className="Text-medium"
              id="inputBox"
              type="text"
              placeholder="Search products & brands.."
              onFocus={() => activeBorder(true)}
              onBlur={() => activeBorder(false)}
            />
            <button type="submit">
              <i className="fal fa-search"></i>
            </button>
          </div>
          <div className="nav-menu-wrapper">
            <ul>
              <li>
                <a href="#" id="user-log">
                  <i className="fal fa-user-alt"></i>Sign Up\Login
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <a href="#" id="burgerMenu-icon">
                  <i className="far fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
