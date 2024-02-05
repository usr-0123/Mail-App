import "./Sideprofile.css";
import Profile from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sideprofile() {
  const [showProfile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!showProfile);
  };

  return (
    <div className="profile-picture">
      <div className="profile-pic">
        <img 
        src={Profile} 
        alt="profile Picture" 
        // onClick={handleProfile} 
        />
      </div>
      <div className="username">
        <h4>Angela Lee</h4>
        <h5>@anglee</h5>
      </div>
    </div>
  );
}

export default Sideprofile;
