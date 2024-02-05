import "./Card.scss";

import "./Card.scss";

import UD from "../../assets/UD.png";
import Dots from "../../assets/dots-vertical.png";
import pic from "../../assets/Mask Group.png";
import User from "../../assets/user4s.png";
import user2 from "../../assets/user4.png";
import user3 from "../../assets/user4.png";
import count from "../../assets/user4.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="cardHeader">
        <div className="logo">
          <div className="div">
            <img src={UD} alt="no image" />
          </div>
          <div>
            <p>UI/UX Designer</p>
            <p>Bandung . 7 posts a day</p>
          </div>
        </div>
        <div>
          <img src={Dots} alt="err" />
        </div>
      </div>
      <div className="picture">
        <img src={pic} alt="" />
      </div>
      <div className="cardBottom">
        <div>
          <button>Join Group</button>
        </div>
        <div className="pictures">
          <img src={User} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
