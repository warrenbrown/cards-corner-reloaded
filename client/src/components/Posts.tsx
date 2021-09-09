import React from "react";
import Post from "./Post";
import "./posts.css";

export type AnyType = any;
interface PostsProps {
  posts: Array<AnyType>;
}
// DocumentsTable = ({ documents, gridColumnFeatureKey }: DocumentsTableProps)
const Posts = (props: PostsProps) => {
  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          timestamp={post.createdAt}
          categories={post.categories}
          userName={post.username}
        />
      ))}
    </div>
  );
};

export default Posts;
