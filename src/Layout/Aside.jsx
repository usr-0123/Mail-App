import "./Aside.css";
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Group";
import Contacts from "../components/Contacts";
import Top from "../Components/Top";
import Bottom from "../components/Bottom";

function LeftContent() {
  return (
    <div className="leftContent">
      {/* <div className="top">
        <Top/>
      </div> */}
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <ShortCuts />
        </div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default LeftContent;
