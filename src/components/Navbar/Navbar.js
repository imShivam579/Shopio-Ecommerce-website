import React from "react";
import "./navbar.css";
import Logo from "../../images/logo.png";
function Navbar() {
  return (
    <>
      <header id="header">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src={Logo} alt="logo" />
          </div>
          <div className="searchbar-wrapper">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search products & brands.."
            />
            <button type="submit">
              <i class="fal fa-search"></i>
            </button>
          </div>
          <div className="nav-menu-wrapper">
            <ul>
              <li>
                <a href="#" id="user-log">
                  <i class="fal fa-user-alt"></i>Sign Up\ Login
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
}

export default Navbar;
