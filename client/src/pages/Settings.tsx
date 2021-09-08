import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SideBar from "../components/SideBar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown"
              alt=""
              className="settingsProfileImg"
            />
            <label htmlFor="fileInput">
              <FontAwesomeIcon
                color="lightcoral"
                size="2x"
                className="settingsProfilePictureIcon"
                icon={faUserCircle}
              />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label className="settingsFormLabel">Username</label>
          <input
            className="settingsFormInput"
            type="text"
            placeholder="ShadowMunkey"
          />
          <label className="settingsFormLabel">Email</label>
          <input
            className="settingsFormInput"
            type="text"
            placeholder="ShadowMunkey@gmail.com"
          />
          <label className="settingsFormLabel">Password</label>
          <input className="settingsFormInput" type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
