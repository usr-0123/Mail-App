import Dots from "../../assets/chevron-down.png";
import React from "react";
import Pictures from "../../JsonFiles/pictures.jsx";
import "./Photos.scss";

const Photos = () => {
  return (
    <div className="photoContainer">
      <div className="photosHeader">
        <p style={{ color: "#0F172A", fontSize: "22px", fontWeight: "700" }}>
          Your Photo
        </p>
        <img src={Dots} alt="err" />
      </div>
      <div className="photoNavigation">
        <p>Photos About You</p>
        <p>Your Photos</p>
        <p>Albums</p>
      </div>
      <div className="photosStats">
        <p style={{ color: "#0F172A", fontSize: "16px", fontWeight: "700" }}>
          Total Photos
        </p>
        <p style={{ color: "#94A3B8", fontSize: "14px", fontWeight: "600" }}>
          42 Total Photos About You
        </p>
      </div>
      <div className="photoWrapper">
        <Pictures />
      </div>
    </div>
  );
};

export default Photos;
