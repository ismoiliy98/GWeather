import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://www.freepik.com/free-photos-vectors/icon">
        Icon vector created by freepik - www.freepik.com
      </a>
      <img
        className="Logo"
        src={require("../../assets/logo.png")}
        alt="GWeather"
      />
      <p>Designed and Developed by Geebrox</p>
    </div>
  );
};

export default Footer;
