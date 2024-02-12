import "./Card.scss";

import User4s from "../../assets/user4s.png";
import UI from "../../assets/UI.png";
import Dots from "../../assets/dots-vertical.png";
import pic from "../../assets/Mask Group2.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="cardHeader">
        <div className="logo">
          <div className="div">
            <img src={UI} alt="no image" />
          </div>
          <div>
            <p>User Interface</p>
            <p>Jakarta . 7 posts a day</p>
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
          <img src={User4s} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
