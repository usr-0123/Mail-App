import Avatar from "../../assets/Avatar.png";
import Post1 from "../../assets/unsplash1.png";
import Post2 from "../../assets/unsplash2.png";
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
          <p>Angela Lee</p>
          <p>56 mins ago</p>
        </div>
      </div>
      <div className="Caption">
        <p>
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
          <span>2.6K Likes</span>
        </div>
        <div className="like">
          <img src={Comments} alt="noImg" />
          <span>297 Comments</span>
        </div>
        <div className="like">
          <img src={Share} alt="noImg" />
          <span>201 Share</span>
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
