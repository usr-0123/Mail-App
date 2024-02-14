import "./Navbar.css";

// assets
import dm from "../assets/inbox.png";
import Notifications from "../assets/notification.png";
import profile from "../assets/Avatar.png";
import chevron from "../assets/chevron-down.png";
import search from "../assets/search.png";
import Logo from "../Components/Logo"
import Navbars from "../Layout/Sidebar"

import Notification from "../PageViews/Notification/Notification";

// hooks
import UseReducer, { initialState } from "../hooks/useReducer";
import { useReducer } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [state, dispatch] = useReducer(UseReducer, initialState);

  const handleNavigationOpen = () => {
    dispatch({ type: "SET_NAVIGATION_OPEN", payload: true });
    console.log("state set to true");
  };

  const handleNavigationClose = () => {
    dispatch({ type: "SET_NAVIGATION_OPEN", payload: false });
  };

  return (
    <nav className="nav-container">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder=" Search" style={{ border: 0 }} />
      </div>

      <div className="nav-right">
        <img src={dm} alt="dm" />
        <img
          src={Notifications}
          alt="Notification"
          onClick={handleNavigationOpen}
        />
        <img src={profile} alt="profile" />
        <img src={chevron} alt="chevron-down" />
      </div>

      {/* mobile design objects  */}

      <div className="mobile-nav">
        <Logo />
      </div>

      {state.isNavigationOpen && (
        <Notification handleOnClose={handleNavigationClose} style={{}} />
      )}
    </nav>
  );
};

export default Navbar;
