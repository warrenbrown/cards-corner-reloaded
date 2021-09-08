import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://www.operationsports.com/wp-content/uploads/2021/08/madden-22-franchise-update.jpg"
        alt="Header"
        className="headerImg"
      />
    </div>
  );
};

export default Header;
