import React from "react";
import BackGround from "../assets/unsplash.png";
import Avatar from "../assets/Avatar.png";
import "./Top.css";

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <img src={BackGround} alt="noimage" />
          <img className="avatar" src={Avatar} alt="noimage" />
        </div>
      </div>
    </div>
  );
};

export default Top;
