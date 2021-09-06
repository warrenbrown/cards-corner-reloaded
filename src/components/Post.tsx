import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.gannett-cdn.com/presto/2021/08/20/USAT/7557cb22-016d-430c-b68c-2a2d6bf472dc-MAD22_Diggs_16x9-4951160cb162d09aa41.63025829.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        alt="gameTime"
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum</span>
        <hr />
        <span className="postDate">1 hr ago</span>
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
