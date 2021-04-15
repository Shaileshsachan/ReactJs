import React from "react";
import "./Hemisphere.css";
import NorthernHem from "./images/NorthernHem.jpg";
import SoutthernHem from "./images/SouthernHem.jpg";

const HemisphereConfig = {
  Northern: {
    text: "It is northern Hemisphere",
    picture: NorthernHem,
  },
  Southern: {
    text: "It i Southern Hemisphere",
    picture: SoutthernHem,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = HemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui text container segment">
        <div className='image'>
          <img src={picture} alt="" />
        </div>
        <div className='ui teal bottom attached label'>
          <h1>{text}</h1>
          </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
