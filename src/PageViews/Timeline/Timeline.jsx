import React from "react";
import "../Timeline/Timeline.scss";
import happy_icon from "../../assets/mood-smile.png";

import PostDiv from "./PostDiv";
import { PostArray } from "./PostDiv";
import PostContent from "../../Components/Timeline/Status";
import Avatar from "../../assets/Avatar.png";
import { NavLink } from "react-router-dom";
import Updates from "../../Components/Timeline/Updates";
import Addupdate from "../../Components/Timeline/AddUpdate";

const postData = PostArray;

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="your-timeline-card">
        <div className="header">
          <span>Your Timeline</span>
        </div>
        <div className="carousel">
          <Updates />
        </div>
      </div>
      <div className="Addupdate">
        <Addupdate />
      </div>
      <div className="create-post-card">
        <PostContent />
      </div>
    </div>
  );
};

export default Timeline;
