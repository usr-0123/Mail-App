import "./RightContainer.css";
import Header from "./Navbar";
import BottomRightContainer from "./BottomRightContainer";

function RightContainer() {
  return (
    <div className="Rightcontainer">
      <div className="navbar">
        <Header />
      </div>
      <div className="right-bottom">
        <BottomRightContainer />
      </div>
    </div>
  );
}
export default RightContainer;
