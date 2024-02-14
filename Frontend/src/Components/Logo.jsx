import "./logo.scss";
import menu from "../assets/menu-2.png";
import logo from "../assets/logo.png";
import Sidebar from "../Layout/Sidebar";

import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo-container">
      <div className="menu-icon">
        <img src={menu} alt="menu" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p style={{ fontSize: "23.2px", fontWeight: "700" }}>Hiphonic</p>
      </div>
      <NavLink to="/Sidebar">
        <div className="menu-btn">
          <button>Menu</button>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;
