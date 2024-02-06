import "./Sidebar.css";
import Shortcuts from "../Components/Shortcuts";
import Sideprofile from "../Components/Sideprofile";
import Sidemenu from "../Components/SideMenu";
import Logo from "../Components/Logo";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sides">
        <div className="logo">
          <div>
            <Logo />
          </div>
        </div>
        <div className="side-below">
          <div className="sprofile">
            <Sideprofile />
          </div>
          <div className="smenu">
            <Sidemenu />
          </div>
          <div className="shortcuts">
            <div className="shortcutsHeader">
              <p style={{ color: "#94A3B8" }}>Shortcuts</p>
            </div>
            <Shortcuts />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
