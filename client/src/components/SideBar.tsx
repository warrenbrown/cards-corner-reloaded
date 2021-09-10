import {
  faFacebookSquare,
  faTwitterSquare,
  faPinterestSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const result = await axios.get("/categories");
      setCategories(result.data);
    };
    getCat();
  }, []);
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
          {categories.map((category: any) => (
            <Link className="link" to={`/?cat=${category.name}`}>
              <li key={category.id} className="sidebarListItem">
                {category.name}
              </li>
            </Link>
          ))}
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
