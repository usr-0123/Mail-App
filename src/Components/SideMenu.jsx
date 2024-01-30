import React from "react";
import timeline from "../assets/layout-grid.png";
import friends from "../assets/users.png";
import groups from "../assets/star.png";
import video from "../assets/video.png";
import photos from "../assets/photo.png";
import events from "../assets/Group.png";
import "./SideMenu.css";

function SideMenu() {
  const menuItems = [
    {
      name: "Timeline",
      icon: timeline,
    },
    {
      name: "friends",
      icon: friends,
    },
    {
      name: "groups",
      icon: groups,
    },
    {
      name: "videos",
      icon: video,
    },
    {
      name: "photos",
      icon: photos,
    },
    {
      name: "events",
      icon: events,
    },
  ];
  return (
    <div className="sidemenu">
      <div className="heading">
        <p>Menu</p>
      </div>
      {menuItems &&
        menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default SideMenu;
