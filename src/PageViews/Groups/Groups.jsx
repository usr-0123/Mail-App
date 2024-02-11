import "./Group.scss";

import Suggests from "../../Components/Groups/suggestedContent";

import Search from "../../assets/default.png";
import Post1 from "../../assets/Post1.png";
import Post2 from "../../assets/Post2.png";
import De from "../../assets/DE.png";

function Groups() {
  return (
    <div className="Groups">
      <div className="groupsTop">
        <div className="header">
          <p style={{ color: "#0F172A", fontWeight: "700", fontSize: "22px" }}>
            Groups
          </p>
          <div className="right">
            <img src={Search} alt="err" />
            <button className="newGroup">+ Create New Group</button>
          </div>
        </div>
        <div className="suggested">
          <div className="suggestedHeader">
            <div className="left">
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                Suggested for you
              </p>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Groups you might be interested in.
              </p>
            </div>
            <div className="suggestedRight">
              <p
                style={{
                  color: "#2563EB",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                See All
              </p>
            </div>
          </div>
          <div className="suggestedContent">
            <Suggests />
          </div>
        </div>
      </div>
      <div className="recentActivity">
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            padding: "10px 0 10px 0",
          }}
        >
          Recent Activity
        </p>
      </div>

      <div className="groupsBottom">
        <div className="header2s">
          <div className="avatars">
            <img src={De} alt="err" />
          </div>
          <div className="user">
            <p
              style={{ color: "#0F172A", fontSize: "14px", fontWeight: "600" }}
            >
              Design Enthusiast
            </p>
            <p style={{ color: "#94A3B8", fontSize: "12px", fontWeight: "500" }}>
              Angela Lee . 56 mins ago
            </p>
          </div>
        </div>
        <div className="caption">
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.2px",
            }}
          >
            Conduct design process best practices across projects such as
            gathering insights, validating problems & solutions, delivering
            multiple fidelity levels of design, and ensure the final design is
            implemented properly on.
          </p>
        </div>
        <div className="pictures">
          <img src={Post1} alt="err" />
          <img src={Post2} alt="err" />
        </div>
      </div>
    </div>
  );
}

export default Groups;
