import "./Sideprofile.css";
import profile from "../assets/Avatar.png";

function Sideprofile() {
  return (
    <div className="profile-picture">
      <div className="profile-pic">
        <img src={profile} alt="profile Picture"/>
      </div>
      <div className="username">
        <h4>Angela Lee</h4>
        <h5>@anglee</h5>
      </div>
    </div>
  );
}

export default Sideprofile;
