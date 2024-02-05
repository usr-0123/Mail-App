import "./AddUpdate.scss";
import Avatar from "../../assets/Avatar.png";
import Like from "../../assets/heart.png";
import Comments from "../../assets/message-circle.png";
import Share from "../../assets/link.png";
import Post1 from "../../assets/Posted1.png";
import Post2 from "../../assets/Posted2.png";
import Post3 from "../../assets/Posted3.png";
import Emoji from "../../assets/mood-smile.png";
import Attach from "../../assets/link.png";

const AddUpdate = () => {
  return (
    <div className="AddUpdate">
      <div className="profile">
        <div>
          <img src={Avatar} alt="noImg" />
        </div>
        <div className="profile-user">
          <p>Angela Lee</p>
          <p>56 mins ago</p>
        </div>
      </div>
      <div>
        <div className="caption">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, I really love those colorful tone. happy for that!
          </p>
        </div>

        <div className="ImagePosted">
          <img src={Post1} alt="" />
          <img src={Post2} alt="" />
          <img src={Post3} alt="" />
        </div>
      </div>
      <div className="interactions">
        <div>
          <img src={Like} alt="" />
          <p>Likes</p>
        </div>
        <div>
          <img src={Comments} alt="" />
          <p>Comments</p>
        </div>
        <div>
          <img src={Share} alt="" />
          <p>Share</p>
        </div>
      </div>

      <div className="statusInput">
        <input
          type="text"
          className="span"
          placeholder="Write your message..."
        />
        <img src={Emoji} alt="" />
        <img src={Attach} alt="" />
      </div>
    </div>
  );
};

export default AddUpdate;
