import "./Sideprofile.css";
import profile from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sideprofile() {

  const [showProfile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!showProfile);
  }

  return (
    <div className="profile-picture">
      <div className="profile-pic">
        <img src={profile} alt="profile Picture" onClick={handleProfile}/>
      </div>
      {/* <NavLink className="username" to='/profile'>
        <h4>Angela Lee</h4>
        <h5>@anglee</h5>
      </NavLink> */}
      
    </div>
  );
}

export default Sideprofile;
