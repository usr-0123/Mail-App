import "./Status.css";
import Avatar from "../../assets/Avatar.png";
import LiveVideo from "../../assets/video.png";
import ImageVideo from "../../assets/photo.png";
import Activity from "../../assets/star.png";

const Status = () => {
  return (
    <div className="Status">
      <div className="statusInput">
        <img src={Avatar} alt="noImg" />
        <input
          type="text"
          className="span"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="border"></div>
      <div className="StatusButtons">
        <div>
          <img src={LiveVideo} alt="noImg" />
          <p>Live Video</p>
        </div>
        <div>
          <img src={ImageVideo} alt="noImg" />
          <p>Image/Video</p>
        </div>
        <div>
          <img src={Activity} alt="noImg" />
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
