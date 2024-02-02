import "./BottomRight.css";
import Status from "./Status";
import Post from "./Post";

function BottomRight() {
  return (
    <div className="bottom-right-container">
      <div className="status">
        <Status />
      </div>
      <div className="post">
        <Post />
      </div>
    </div>
  );
}
export default BottomRight;
