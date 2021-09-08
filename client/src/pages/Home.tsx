import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
