import {
  faFacebookSquare,
  faTwitterSquare,
  faPinterestSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://cdn.mos.cms.futurecdn.net/2f8MJU8njD9C9iPLnNrUVJ-970-80.jpg.webp"
          alt="T220R"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          deserunt ex aliquid sint eveniet.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">SOCIAL</span>
        <div className="sidebarSocial">
          <FontAwesomeIcon className="sidebarIcon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faPinterestSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faInstagramSquare} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
