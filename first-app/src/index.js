import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/profile1.jpg";
import SingleComment from './SingleComment';

const App = () => {
  const style = { backgroundColor: "black", color: "white" };

  return (
    <div className="ui comments">
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
