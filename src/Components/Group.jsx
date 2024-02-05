import React from "react";
import "./Group.css";
import Group1 from "../assets/Avatar-g.png";
import Group2 from "../assets/Avatar-g (1).png";
import Group3 from "../assets/Avatar-g (2).png";

function Groups() {
  const groupData = [
    {
      icon: Group1,
      name: "Design Enthusiast",
    },
    {
      icon: Group2,
      name: "UI Official",
    },
    {
      icon: Group3,
      name: "Web Designer",
    },
  ];
  return (
    <div className="GroupItems">
      <div className="heading">
        <p
          style={{
            textTransform: "uppercase",
            color: "#94A3B8",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Your Page
        </p>
        <p
          style={{
            color: "#2563EB",
            color: "#2563EB",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          See all
        </p>
      </div>
      {groupData &&
        groupData.map((item, index) => (
          <div className="group-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              {item.name}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Groups;
