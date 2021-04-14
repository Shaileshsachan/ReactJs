import React from "react-dom";

const UserCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Shailesh Sachan</div>
        <div className="description">{props.children}</div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  );
};

export default UserCard;
