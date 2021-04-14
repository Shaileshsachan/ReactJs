import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/profile1.jpg";
import profile2 from "./image/profile2.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  const style = { backgroundColor: "black", color: "white" };

  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Aditya"
          date="Today at 4PM"
          text="It is amazing"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Yogesh"
          date="Today at 2AM"
          text="Awesome"
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Bob"
          date="Today at 12AM"
          text="Thanks....."
          picture={profile1}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
