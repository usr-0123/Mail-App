import "./Content.css";
import Left from "../Components/ContentLeft";
import Right from "../Components/ContentRight";
import Top from "../Components/Top";

function Content() {
  return (
    <div className="center-body">
      
      <div className="center-top">
        <Top />
      </div>

      <div className="center-bottom">
        <Left />
        <Right />
      </div>

    </div>
  );
}

export default Content;
