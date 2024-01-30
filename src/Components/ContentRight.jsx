import React from "react";
import "./ContentRight.css";
import Avatar from "../assets/Avatar.png";
import video from "../assets/video.png";
import vectoround from "../assets/star.png";
import vectorstar from "../assets/photo.png";
import unsplash from "../assets/unsplash1.png";
import likes from "../assets/heart.png";
import comments from "../assets/message-circle.png";
import shares from "../assets/share.png";
import emoji from "../assets/mood-smile.png";
import attach from "../assets/link.png";

const RightCenter = () => {
  return (
    <div className="right-center">
      <div className="containers">
        <div className="top">
          <div className="pro">
            <img src={Avatar} alt="" />
          </div>
          <div className="inputs">
            <input
              className="input-text"
              type="text"
              placeholder="Whats on your mind?"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="img">
            <img src={video} alt="" />
            <p>Live Video</p>
          </div>

          <div className="img">
            <img src={vectorstar} alt="" />
            <p>Image/Video</p>
          </div>

          <div className="img">
            <img src={vectoround} alt="" />
            <p>Activity</p>
          </div>
        </div>
      </div>

      <div className="ground">
        <div className="pro">
          <img src={Avatar} alt="" />
          <div className="info">
            <h4>Angela Lee</h4>
            <p>56 mins ago</p>
          </div>
        </div>
        <div className="text">
          <p>
            Here are some photography works that i made on the weekend with some
            of my friends, happy for that!
          </p>
        </div>
        <div className="images">
          <img src={unsplash} alt="" />
          <img src={unsplash} alt="" />
        </div>
        <div className="likes">
          <div>
            <img src={likes} alt="" />
            <p>2.6K Likes</p>
          </div>
          <div>
            <img src={comments} alt="" />
            <p>297 Comments</p>
          </div>
          <div>
            <img src={shares} alt="" />
            <p>201 Shares</p>
          </div>
        </div>
        <div className="text-message">
          <input type="text" placeholder="Write your message..." />
          <img src={emoji} alt="emoji" />
          <img src={attach} alt="attach" />
        </div>
      </div>
    </div>
  );
};

export default RightCenter;
