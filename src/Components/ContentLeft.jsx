import React from "react";
import Range from "../Components/Range";
import "./ContentLeft.css";
import pin from "../assets/Group.png";
import briefcase from "../assets/briefcase.png";
import calender from "../assets/Group.png";
import link from "../assets/link.png";
import unsplash1 from "../assets/unsplash1.png";
import unsplash2 from "../assets/unsplash2.png";
import dots from "../assets/dots-vertical.png";

const ContentLeft = () => {
  return (
    <div className="left-center">
      <div className="completePro">
        <p>Complete Your Profile</p>
        <Range />
      </div>

      <div className="intro">
        <div className="intr">
          <p>Intro</p>
          <img src={dots} alt="dots" />
        </div>
        <div className="experience">
          <p>I am an experienced joiner with well developed skills</p>
        </div>
        <div>
          <div className="icon-p">
            <img src={pin} alt="" />
            <p>29272 Westheimer Rd.</p>
          </div>
          <div className="icon-p">
            <img src={briefcase} alt="" />
            <p>Binford Ltd.</p>
          </div>
          <div className="icon-p">
            <img src={calender} alt="" />
            <p>September 24, 2017</p>
          </div>
          <div className="icon-p">
            <img src={link} alt="" />
            <p>drible.com/Angela</p>
          </div>
        </div>
      </div>

      <div className="photos">
        <div className="see-all">
          <p>Photos</p>
          <p style={{ color: "#2563EB" }}>see all</p>
        </div>
        <div className="pics">
          <img src={unsplash2} alt="" />
          <img src={unsplash1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
