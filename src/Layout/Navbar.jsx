import "./Navbar.css";

// imports from the assets folder
import dm from "../assets/inbox.png";
import Notification from "../assets/notification.png";
import profile from "../assets/Avatar.png";
import chevron from "../assets/chevron-down.png";
import search from "../assets/search.png";

// The Function
function Navbar() {
  return (
    <nav className="nav-container">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder=" Search" style={{ border: 0 }} />
      </div>
      
      <div className="nav-right">
        <img src={dm} alt="dm" />
        <img src={Notification} alt="Notification" />
        <img src={profile} alt="profile" />
        <img src={chevron} alt="chevron-down" />
      </div>
    </nav>
  );
}
export default Navbar;
