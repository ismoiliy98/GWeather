import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Logo"
          src={require("../../assets/logo.png")}
          alt="GWeather"
        />
      </Link>
    </div>
  );
};

export default Header;
