import Avatar from "../../assets/Avatar.png";
import Post1 from "../../assets/unsplash3.png";
import Post2 from "../../assets/unsplash4.png";
import Like from "../../assets/heart.png";
import Comments from "../../assets/message-circle.png";
import Share from "../../assets/link.png";
import emoji from "../../assets/mood-smile.png";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="Profile">
        <img src={Avatar} alt="noImg" />
        <div>
          <p style={{ fontSize: "14px", fontSize: "600" }}>Angela Lee</p>
          <p
            style={{ fontSize: "12px", fontWeight: "500px", color: "#94A3B8" }}
          >
            56 mins ago
          </p>
        </div>
      </div>
      <div className="Caption">
        <p style={{ color: "#64748B", fontSize: "14px", fontWeight: "500" }}>
          Here are some photography works that I made on the weekend with some
          of my friends, happy for that!
        </p>
      </div>
      <div className="Images">
        <img src={Post1} alt="noImg" />
        <img src={Post2} alt="noImg" />
      </div>
      <div className="Interactions">
        <div className="like">
          <img src={Like} alt="noImg" />
          <span style={{ color: "#2563EB" }}>2.6K Likes</span>
        </div>
        <div className="like">
          <img src={Comments} alt="noImg" />
          <span style={{ color: "#94A3B8" }}>297 Comments</span>
        </div>
        <div className="like">
          <img src={Share} alt="noImg" />
          <span style={{ color: "#94A3B8" }}>201 Share</span>
        </div>
      </div>
      <div className="Input">
        <input
          type="text"
          className="input"
          placeholder="Write your message..."
        />
        <img src={emoji} alt="noImg" />
        <img src={Share} alt="noImg" />
      </div>
    </div>
  );
};

export default Post;
