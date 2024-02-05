import "./Intro.css";
import Dots from "../../assets/dots-vertical.png";
import MapPin from "../../assets/map-pin.png";
import Briefcase from "../../assets/briefcase.png";
import Calender from "../../assets/Group.png";
import Link from "../../assets/link.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="Intro-top">
        <div className="intro-title">
          <p>Intro</p>
        </div>
        <div className="intro-dots">
          <img src={Dots} alt="dots" />
        </div>
      </div>
      <div>
        <p>I am an experienced joiner with well developed skills</p>
      </div>
      <div className="list">
        <div className="map-pin">
          <img src={MapPin} alt="" />
          <p>2972 Westheimer Rd.</p>
        </div>
        <div className="Briefcase">
          <img src={Briefcase} alt="" />
          <p>Binford Ltd.</p>
        </div>
        <div className="Calender">
          <img src={Calender} alt="" />
          <p>September 24 2017</p>
        </div>
        <div className="link">
          <img src={Link} alt="" />
          <p>dribble.com/Angela</p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
