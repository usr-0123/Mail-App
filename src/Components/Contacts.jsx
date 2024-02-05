import "./Contacts.css";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/Avatar.png";

function Contacts() {
  return (
    <>
      <div className="contactshead">
        <p style={{ color: "#94A3B8", fontSize:"12px",fontWeight:"700" }}>CONTACTS</p>
        <p style={{ color: "#2563EB",fontSize: "14px",fontWeight:"700" }}>See all</p>
      </div>

      <div className="user1">
        <img src={user1} alt="img1" />
        <p>Wade Warren</p>
      </div>

      <div className="user2">
        <img src={user2} alt="img2" />
        <p>Jane Cooper</p>
      </div>

      <div className="user3">
        <img src={user3} alt="img3" />
        <p>Esther Howard</p>
      </div>

      <div className="user4">
        <img src={user4} alt="img4" />
        <p>Cameroon Wiliamson</p>
      </div>

      <div className="user5">
        <img src={user5} alt="img5" />
        <p>brooklyn Simmons</p>
      </div>
    </>
  );
}

export default Contacts;
