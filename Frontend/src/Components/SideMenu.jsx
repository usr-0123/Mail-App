import React from "react";
import timeline from "../assets/layout-grid.png";
import friends from "../assets/users.png";
import groups from "../assets/star.png";
import video from "../assets/video.png";
import photos from "../assets/photo.png";
import events from "../assets/Group.png";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  const menuItems = [
    {
      name: "Timeline",
      icon: timeline,
      path: "/timeline"
    },
    {
      name: "Friends",
      icon: friends,
      path: "/friends",
    },
    {
      name: "Groups",
      icon: groups,
      path: "/groups",
    },
    {
      name: "Videos",
      icon: video,
      path: "/videos",
    },
    {
      name: "Photos",
      icon: photos,
      path: "/photos",
    },
    {
      name: "Events",
      icon: events,
      path: "/events",
    },
  ];
  return (
    <div className="sidemenu">
      <div className="heading">
        <p style={{ color: "#94A3B8",fontSize:"12px"}}>Menu</p>
      </div>
      {menuItems &&
        menuItems.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
            key={item.path}
          >
            <div>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
    </div>
  );
}

export default SideMenu;
