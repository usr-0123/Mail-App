import "./Update.scss";
import video from "../assets/video.png";
import imageVideo from "../assets/photo.png";
import actvity from "../assets/star.png";
import Avatar from "../assets/Avatar.png";

export const UpdateArray = [
  {
    postImage: video,
    imageDetails: "Live Video",
  },
  {
    postImage: imageVideo,
    imageDetails: "Images/Video",
  },
  {
    postImage: actvity,
    imageDetails: "Activity",
  },
];

const Update = () => {
  return (
    <div className="post-container">
      <div className="profile-pic-input">
        <img src={Avatar} alt="" />
        <input type="text" placeholder="What is in your mind" />
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
  );
};

export default Update;
