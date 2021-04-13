import React from "react";
import profile1 from "./image/profile1.jpg";

const SingleComment = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={profile1} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Shailesh
        </a>
        <div className="metadata">
          <span className="date">Today at 12:00PM</span>
        </div>
        <div className="text">fantabulous and nice</div>
      </div>
    </div>
  );
};

export default SingleComment;
