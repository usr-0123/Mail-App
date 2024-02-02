import CompleteProfile from "./CompleteProfile";
import Intro from "./Intro";
import "./BottomLeft.css";
import Photos from "./Photos";

function BottomLeft() {
  return (
    <div className="bottom-left-container">
      <div className="complete-profile">
        <CompleteProfile />
      </div>
      <div className="intro">
        <Intro />
      </div>
      <div className="photos">
        <Photos />
      </div>
    </div>
  );
}
export default BottomLeft;
