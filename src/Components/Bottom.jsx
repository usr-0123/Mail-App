import "./Bottom.css";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

function Bottom() {
  return (
    <div className="bottoms">
      <div className="bottomleft">
        <BottomLeft />
      </div>
      <div className="bottomright">
        <BottomRight />
      </div>
    </div>
  );
}

export default Bottom;
