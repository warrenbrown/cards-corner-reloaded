import React from "react";
import Post from "../components/Post";
import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      {/* <Post /> */}
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
