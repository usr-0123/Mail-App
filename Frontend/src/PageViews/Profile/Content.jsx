import "./Content.css";
import Top from "../../Components/Profile/Top";
import Bottom from "../../Components/Profile/Bottom";

function Content() {
  return (
    <div className="contents">
      <div className="content-top">
        <Top />
      </div>
      <div className="content-bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default Content;
