import React from "react";
import "./post.css";
import moment from "moment";

export type AnyType = any;
interface PostProps {
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
            <span className="postCat">
              {category?.name ? category.name : "No category supplied"}
            </span>
          ))}
        </div>
        <span className="postTitle">{props.title}</span>
        <hr />
        <span className="postDate">{props.timestamp}</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, accusamus
        saepe sunt enim corrupti consectetur magnam asperiores soluta quam
        voluptatibus tenetur dolore impedit aliquam? Sit aspernatur accusamus
        rem qui nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum, accusamus saepe sunt enim corrupti consectetur magnam asperiores
        soluta quam voluptatibus tenetur dolore impedit aliquam? Sit aspernatur
        accusamus rem qui nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum, accusamus saepe sunt enim corrupti consectetur
        magnam asperiores soluta quam voluptatibus tenetur dolore impedit soluta
        quam voluptatibus tenetur dolore impedit aliquam? Sit aspernatur
        accusamus rem qui nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum, accusamus saepe sunt enim corrupti consectetur
        magnam asperiores soluta quam voluptatibus tenetur dolore impedit soluta
        quam voluptatibus tenetur dolore impedit aliquam? Sit aspernatur
        accusamus rem qui nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum, accusamus saepe sunt enim corrupti consectetur
        magnam asperiores soluta quam voluptatibus tenetur dolore impedit soluta
        quam voluptatibus tenetur dolore impedit aliquam? Sit aspernatur
        accusamus rem qui nihil. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum, accusamus saepe sunt enim corrupti consectetur
        magnam asperiores soluta quam voluptatibus tenetur dolore impedit
        aliquam? Sit aspernatur accusamus rem qui nihil.
      </p>
    </div>
  );
};

export default Post;
