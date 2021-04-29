import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/shailesh" className="ui header">
          Shailesh
        </Link>
        <p>
          Lorem ipsum dolor sit amet, cosectetur elit, Lorem ipsum dolor sit
          amet, cosectetur elit, Lorem ipsum dolor sit amet, cosectetur elit
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/yogesh" className="ui header">
          yogesh
        </Link>
        <p>
          Lorem ipsum dolor sit amet, cosectetur elit, Lorem ipsum dolor sit
          amet, cosectetur elit, Lorem ipsum dolor sit amet, cosectetur elit
        </p>
      </div>
    </div>
  );
};

export default Contact;
