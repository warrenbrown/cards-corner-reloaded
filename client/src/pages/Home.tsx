import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(`/posts${search}`);
      setPosts(result.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
