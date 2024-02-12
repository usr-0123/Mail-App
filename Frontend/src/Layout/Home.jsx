import "./Home.css";
import Sidebar from "./Sidebar";
import RightContainer from "./RightContainer";

function Home() {
  return (
    <div className="HomePage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="rightcontainer">
        <RightContainer />
      </div>
    </div>
  );
}

export default Home;
