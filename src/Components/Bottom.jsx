import React from "react";
import "./Bottom.css";
import CenterBody from "../layout/Content";

const Bottom = () => {
  return (
    <>
      <div className="below-image">
        <div className="pro">
          Angela Lee <br />
          @angela
        </div>
        <div className="navs">
          <div className="posts">
            <h3 className="dim-header">POSTS</h3>
            <br />
            683
          </div>
          <div className="posts">
            <h3 className="dim-header">FRIENDS</h3>
            <br />
            5.7K
          </div>
          <div className="posts">
            <h3 className="dim-header">PHOTOS</h3>
            <br />
            296
          </div>
          <div className="posts">
            <h3 className="dim-header">LIKES</h3>
            <br />
            10.7K
          </div>
        </div>
      </div>

      <CenterBody />
    </>
  );
};

export default Bottom;
