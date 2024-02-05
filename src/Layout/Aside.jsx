import "./Aside.css";
import Cuts from "../Components/Shortcuts";
import Groups from "../components/Group";
import Contacts from "../components/Contacts";

function LeftContent() {
  return (
    <div className="leftContent">
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <Cuts />
        </div>
        <div className="border"></div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="border"></div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default LeftContent;
