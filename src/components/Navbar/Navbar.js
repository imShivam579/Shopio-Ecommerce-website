import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar({ toggle }) {
  let [ActiveBorder, setActiveBorder] = useState();
  function activeBorder(onFocus) {
    setActiveBorder(onFocus ? "active" : null);
  }
  return (
    <>
      <header id="header">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <NavLink to="/">
              <img src="./images/logo.png" alt="logo" className="brand-logo" />
            </NavLink>
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
                <a href="#" id="user-log" className="Text-medium">
                  <i className="fal fa-user-alt"></i>Sign Up\Login
                </a>
              </li>
              <li>
                <NavLink to="/product" className="Text-medium">
                  <i className="fal fa-shopping-cart"></i>
                </NavLink>
              </li>
              <li id="burgerMenu-icon" className="Text-medium" onClick={toggle}>
                <i className="fad fa-bars"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
