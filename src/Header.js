import React from "react";
import "./Header.css";
import logo from "./guest-book-banner.jpg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
    </div>
  );
}

export default Header;
