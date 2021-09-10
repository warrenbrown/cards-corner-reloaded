import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";

interface Post {
  title: string;
  username: string;
  desc: string;
  photo: string;
  categories: Array<any>;
  timestamp: string;
}
interface PostParams {
  postId: string;
  title: string;
}

const SinglePost: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { postId } = useParams<PostParams>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`/posts/${postId}`);
      // const res = await axios.get(`/posts/${path}`);
      setPost(result.data);
    };

    fetchPost();
  }, [postId]);

  console.log("This is the post Id", postId);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.vox-cdn.com/thumbor/eN0AK9sh_b6eVgK-lHRSrNBv57c=/0x0:1200x800/920x613/filters:focal(437x306:629x498):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69666217/119072917_1324337791231765_7035756413008301847_n.0.0.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post?.title}
          <div className="singlePostEdit">
            <FontAwesomeIcon className="singlePostIcon" icon={faEdit} />
            <FontAwesomeIcon className="singlePostIcon" icon={faTrashAlt} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link className="link" to={`/?user=${post?.username}`}>
              Author: <b>{post?.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDescription">{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
