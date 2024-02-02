import React from "react";
import "../Timeline/Timeline.scss";
import emoji from "../../assets/mood-smile.png";

import Update from "../../Components/Update";
import { UpdateArray } from "../../Components/Update";
import ContentUpdate from "../../Components/Post";
import Avatar from "../../assets/Avatar.png";
import { NavLink } from "react-router-dom";
const postData = UpdateArray;

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="your-timeline-card">
        <div className="header">
          <span>Your Timeline</span>
        </div>
        <div className="carousel">{/* carousel images go here */}</div>
      </div>

      <div className="create-post-card">
        <div className="profile-user-name-wrapper">
          <div className="names">
            <div className="avatar">
              <img src={Avatar} alt="" style={{ width: 40, height: 40 }} />
            </div>
            <NavLink className="user-name" to="/profile">
              <span>Angela lee</span>
              <span>@anglee</span>
            </NavLink>
          </div>

          <div className="public-action">
            <div className="public-icon-action">
              <span>Public...</span>
            </div>
          </div>
        </div>
        <div className="post-input">
          <input type="text" placeholder="what is in your mind" />
          <img src={emoji} alt="emoji" />
        </div>

        <div className="actions">
          {UpdateArray &&
            UpdateArray.map((item, index) => {
              const { imageDetails, postImage } = item;
              return (
                <div className="live-video" key={index}>
                  <img src={postImage} alt="" />
                  <span>{imageDetails}</span>
                </div>
              );
            })}
        </div>
      </div>

      <ContentUpdate />
      {/* <ContentUpdate /> */}
      {/* <ContentUpdate /> */}
    </div>
  );
};

export default Timeline;
