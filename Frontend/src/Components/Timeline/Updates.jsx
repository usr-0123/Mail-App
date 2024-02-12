//Assets imports
import "./Updates.scss";

import { NavLink } from "react-router-dom";
import user1 from "../../assets/users1.png";
import user2 from "../../assets/users2.png";
import user3 from "../../assets/users3.png";
import user4 from "../../assets/users4.png";
import user5 from "../../assets/users5.png";
import user6 from "../../assets/users6.png";
import user7 from "../../assets/users7.png";
import user8 from "../../assets/users8.png";
import user9 from "../../assets/users9.png";

function Updates() {
  const updates = [
    {
      image: user1,
      username: "You",
    },
    {
      image: user2,
      username: "anglee",
    },
    {
      image: user3,
      username: "anglee",
    },
    {
      image: user4,
      username: "anglee",
    },
    {
      image: user5,
      username: "anglee",
    },
    {
      image: user6,
      username: "anglee",
    },
    {
      image: user7,
      username: "anglee",
    },
    {
      image: user8,
      username: "anglee",
    },
    {
      image: user9,
      username: "anglee",
    },
  ];

  return (
    <div className="updatesTop">
      {updates &&
        updates.map((item) => (
        //   <NavLink
        //     to={item.path}
        //     className={({ isActive }) =>
        //       isActive ? "update active" : "update"
        //     }
        //     key={item.path}
        //   >
            <div className="updatedd">
              <img src={item.image} alt={item.name} />
              <p>{item.username}</p>
            </div>
        //   </NavLink>
        ))}
    </div>
  );
}
export default Updates;
