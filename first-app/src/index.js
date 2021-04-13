import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/profile1.jpg";
import profile2 from "./image/profile2.jpg"
import SingleComment from "./SingleComment";

const App = () => {
  const style = { backgroundColor: "black", color: "white" };

  return (
    <div className="ui comments">
      <SingleComment name="Aditya" date="Today at 4PM" text="It is amazing" picture={profile1} />
      <SingleComment name="Yogesh" date="Today at 2AM" text="Awesome" picture={profile2} />
      <SingleComment name="Bob" date="Today at 12AM" text="Thanks....." picture={profile1} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
