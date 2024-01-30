import "./Sidebar.css";
import Shortcuts from "../Components/Shortcuts";
import Sideprofile from "../Components/Sideprofile";
import Sidemenu from "../Components/SideMenu";
import Logo from "../Components/Logo";

function Sidebar() {
  return (
    <>
      <Logo />
      <Sideprofile />
      <Sidemenu />
      <Shortcuts />
    </>
  );
}
export default Sidebar;
