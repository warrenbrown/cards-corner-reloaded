import React from "react";
import "./post.css";
import moment from "moment";
import { Link } from "react-router-dom";

export type AnyType = any;
interface PostProps {
  id: string;
  title: string;
  desc?: string;
  photo?: string;
  userName?: string;
  categories?: Array<AnyType>;
  timestamp: string;
}

const Post = (props: PostProps) => {
  return (
    <div className="post">
      <img className="postImg" src={props.photo} alt="gameTime" />
      <div className="postInfo">
        <div className="postCat">
          {props.categories?.map((category) => (
            <span key={category._id} className="postCat">
              {category.name}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${props.id}`}>
            {props.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{moment(props.timestamp).fromNow()}</span>
      </div>
      <p className="postDescription">{props.desc}</p>
    </div>
  );
};

export default Post;
