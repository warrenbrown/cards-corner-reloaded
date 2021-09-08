import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.vox-cdn.com/thumbor/eN0AK9sh_b6eVgK-lHRSrNBv57c=/0x0:1200x800/920x613/filters:focal(437x306:629x498):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69666217/119072917_1324337791231765_7035756413008301847_n.0.0.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <FontAwesomeIcon className="singlePostIcon" icon={faEdit} />
            <FontAwesomeIcon className="singlePostIcon" icon={faTrashAlt} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Warren</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          voluptate eaque tempora! Quis voluptatum fuga amet nobis quas repellat
          delectus quae vero, dolorum maiores commodi, optio deleniti.
          Perspiciatis, voluptate consequuntur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolorum voluptate eaque tempora! Quis
          voluptatum fuga amet nobis quas repellat delectus quae vero, dolorum
          maiores commodi, optio deleniti. Perspiciatis, voluptate consequuntur.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          voluptate eaque tempora! Quis voluptatum fuga amet nobis quas repellat
          delectus quae vero, dolorum maiores commodi, optio deleniti.
          Perspiciatis, voluptate consequuntur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolorum voluptate eaque tempora! Quis
          voluptatum fuga amet nobis quas repellat delectus quae vero, dolorum
          maiores commodi, optio deleniti. Perspiciatis, voluptate consequuntur.
          Perspiciatis, voluptate consequuntur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolorum voluptate eaque tempora! Quis
          voluptatum fuga amet nobis quas repellat delectus quae vero, dolorum
          maiores commodi, optio deleniti. Perspiciatis, voluptate consequuntur.
          Perspiciatis, voluptate consequuntur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolorum voluptate eaque tempora! Quis
          voluptatum fuga amet nobis quas repellat delectus quae vero, dolorum
          maiores commodi, optio deleniti. Perspiciatis, voluptate consequuntur.
          Perspiciatis, voluptate consequuntur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolorum voluptate eaque tempora! Quis
          voluptatum fuga amet nobis quas repellat delectus quae vero, dolorum
          maiores commodi, optio deleniti. Perspiciatis, voluptate consequuntur.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
