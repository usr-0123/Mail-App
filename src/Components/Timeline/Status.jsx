import "./Status.scss";

//assets imports
import ProfilePic from "../../assets/Avatar.png";
import Emoji from "../../assets/mood-smile.png";
import Attach from "../../assets/link.png";
import Video from "../../assets/video.png";
import Image from "../../assets/photo.png";
import Star from "../../assets/star.png";
import HorizontalDots from "../../assets/dots-vertical.png";
import World from "../../assets/globe.png";
import ChevronDown from "../../assets/chevron-down.png";

const Status = () => {
  return (
    <div className="status">
      <div className="StatusTop">
        <div className="profile">
          <div className="picture">
            <img src={ProfilePic} alt="Profile Empty" />
          </div>
          <div className="user">
            <p>Angela Lee</p>
            <p>@anglee</p>
          </div>
        </div>
        <div className="userState">
          <img src={World} alt="err" />
          <p>Public</p>
          <img src={ChevronDown} alt="err" />
        </div>
      </div>

      <div className="typing">
        <input type="text" placeholder="What's on your Mind?" />
        <img src={Emoji} alt="err" />
        <img src={Attach} alt="err" />
      </div>
      <div className="interaction">
        <div className="Left">
          <div className="liveVideo">
            <img src={Video} alt="err" />
            <p>Live Video</p>
          </div>
          <div className="imageVideo">
            <img src={Image} alt="err" />
            <p>Image/Video</p>
          </div>
          <div className="activity">
            <img src={Star} alt="err" />
            <p>Activity</p>
          </div>
        </div>
        <div className="dots">
          <img src={HorizontalDots} alt="err" />
        </div>
      </div>
    </div>
  );
};
export default Status;
