import React from "react";
import { Link } from "react-router-dom";
import BigImg from "../../assets/unsplash.png";
import Avatar from "../../assets/Avatar.png";
import Profile from "../../PageViews/Profile/Content";
import "./Top.css";

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <div className="blueimage-top">
            <div className="btn-edit">
              <button className="floatBtn">Edit Profile</button>
            </div>
            <img className="bigimg" src={BigImg} alt="noimage" />
          </div>
          <div className="avatar-container">
            <img className="avatar" src={Avatar} alt="noimage" />
          </div>
        </div>
        <div className="blow">
          <div className="floatProf">
            <p
              style={{
                color: "#background: #0F172A",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Angela Lee
            </p>
            <p
              style={{ color: "#64748B", fontSize: "14px", fontWeight: "500" }}
            >
              @anglee
            </p>
          </div>
          <div className="belowbigimg">
            <div className="posts">
              <p
                style={{
                  color: "#94A3BB",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Posts
              </p>
              <h1
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                683
              </h1>
            </div>
            <div className="bordered"></div>
            <div className="friends">
              <p
                style={{
                  color: "#94A3BB",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Friends
              </p>
              <h1
                style={{
                  // color: "#2563EB",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                5.7K
              </h1>
            </div>
            <div className="bordered"></div>
            <div className="topPhotos">
              <p
                style={{
                  color: "#94A3BB",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Photos
              </p>
              <h1
                style={{
                  // color: "#2563EB",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                296
              </h1>
            </div>
            <div className="bordered"></div>
            <div className="likes">
              <p
                style={{
                  color: "#94A3BB",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Likes
              </p>
              <h1
                style={{
                  // color: "#2563EB",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                10.7K
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
