import "./Aside.css";
import Cuts from "../Components/Shortcuts";
import Groups from "../components/Group";
import Contacts from "../components/Contacts";

function LeftContent() {
  return (
    <div className="leftContent">
      {/* <div className="leftSide"> */}
        <div className="sidebar-shortCuts">
          <div className="shortcutHeading">
            <p style={{ color: "#94A3B8" }}>Your Pages</p>
            <p style={{ color: "#2563EB" }}>See all</p>
          </div>
          <Cuts />
        </div>
        <div className="border"></div>
        <div className="SideProfile">
          <div className="contactsHeader">
            <p style={{ color: "#94A3B8" }}>CONTACTS</p>
            <p style={{ color: "#2563EB" }}>See all</p>
          </div>
          <div className="contactsList">
            <Contacts />
          </div>
        </div>
        <div className="border"></div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      {/* </div> */}
    </div>
  );
}
export default LeftContent;
