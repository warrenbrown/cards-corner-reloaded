import React from "react";
import Post from "./Post";
import "./posts.css";

export type AnyType = any;
interface PostsProps {
  posts: Array<AnyType>;
}

const Posts = (props: PostsProps) => {
  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          timestamp={post.createdAt}
          categories={post.categories}
          userName={post.username}
          desc={post.desc}
        />
      ))}
    </div>
  );
};

export default Posts;
