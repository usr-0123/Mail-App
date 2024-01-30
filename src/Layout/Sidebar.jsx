import "./Sidebar.css";
import Shortcuts from "../Components/Shortcuts";
import Sideprofile from "../Components/Sideprofile";
import Sidemenu from "../Components/SideMenu";
import Logo from "../Components/Logo";

function Sidebar() {
  return (
    <div className="sides">
      <div className="logo">
        <Logo />
      </div>
      <div className="sprofile">
        <Sideprofile />
      </div>
      <div className="smenu">
        <Sidemenu />
      </div>
      <div className="shortcuts">
        <Shortcuts />
      </div>
    </div>
  );
}
export default Sidebar;
