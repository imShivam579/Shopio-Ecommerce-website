import React, { useState } from "react";
import "./sidebarStyle.css";

function Sidebar({ isOpen, toggle }) {
  const [sidebarDetails, changeSidebarDetails] = useState({
    activeLink: "",
    linkObject: [
      {
        title: "Digital Devices and Electronics",
        links: ["Echo & Alexa", "fire tv", "Electronic Accesseries", "Laptop"],
      },
      {
        title: "Shop by department",
        links: [
          "Mobile, computer",
          "tv, appliances, electronics",
          "men’s fashion",
          "woman’s fashion",
        ],
      },
      {
        title: "help & settings",
        links: ["your account", "customer service", "help center"],
      },
    ],
  });
  function sidebarOpen() {
    if (isOpen) {
      return "show";
    } else {
      return "hide";
    }
  }

  return (
    <>
      <div id="sidebar" className={sidebarOpen()}>
        <div className="sidebar__header">
          <div className="sidebar__header--userInfo">
            <div className="sidebar__header--imgWrapper">
              <img src="./images/userImg.png" alt="userImg" />
            </div>
            <div className="sidebar__header--infoTextWrapper">
              <span className="user__greting--text Text-extraSmall">Hello</span>
              <span className="sidebar__header--userName Text-medium">
                user_name
              </span>
            </div>
          </div>
          <div className="sidebar__closeOverlay--icon-wrapper">
            <i className="fal fa-times" onClick={toggle}></i>
          </div>
        </div>
        <div className="sidebar__wrapper">
          {sidebarDetails.linkObject.map((response, index) => {
            const sidebarTitle = response.title;
            const links = response.links;
            return (
              <div className="sidebar__linkWrapper" key={index}>
                <div className="sidebar__title Text-large">{sidebarTitle}</div>
                {links.map((link, index) => {
                  return (
                    <div className="sidebar__link Text-medium" key={index}>
                      {link}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="sidebar__linkWrapper signOut-wrapper">
            <div className="sidebar__link Text-medium">
              Sign out <i className="fad fa-sign-out"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sidebar-bgcover"
        className={sidebarOpen()}
        onClick={toggle}
      ></div>
    </>
  );
}

export default Sidebar;
