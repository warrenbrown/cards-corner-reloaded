import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Cards Corner</span>
        <span className="headerTitleLg">Cards Corner</span>
      </div>
      <img
        src="https://i.imgur.com/iS5nvQA.jpg"
        alt="Header"
        className="headerImg"
      />
    </div>
  );
};

export default Header;
