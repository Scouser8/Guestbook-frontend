import React from "react";
import "./Header.css";
import logo from "./guestbook_logo.png";
import { Avatar } from "@material-ui/core";

function Header({ user }) {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__logo" />
      <div className="header__userInfo">
        <Avatar src="" />
        <h5 className="header__username">{user.user_name}</h5>
      </div>
    </div>
  );
}

export default Header;
