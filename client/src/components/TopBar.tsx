import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./topbar.css";
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="topIcon" icon={faTwitterSquare} />
        <FontAwesomeIcon className="topIcon" icon={faPinterestSquare} />
        <FontAwesomeIcon className="topIcon" icon={faInstagramSquare} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          alt="avatar"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown"
        />
        <FontAwesomeIcon className="topSearchIcon" icon={faSearch} />
      </div>
    </div>
  );
};

export default TopBar;
