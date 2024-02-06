import "./Shortcuts.css";
import icon1 from "../assets/Rectangle 556.png";
import icon2 from "../assets/Rectangle 556 (1).png";
import icon3 from "../assets/Rectangle 556 (2).png";

function Shortcuts() {
  return (
    <>
      {/* <div className="shortcut-title">
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "700",
            color: "#94A3B8",
          }}
        >
          Shortcuts
        </p>
        <p style={{ color: "#2563EB" }}>See all</p>
      </div> */}
      <div className="shortcut-list">
        <div className="web-design">
          <img src={icon1} alt="icon1" />
          <p>Website Design</p>
        </div>
        <div className="Mob-design">
          <img src={icon2} alt="icon2" />
          <p>Mobile Design</p>
        </div>
        <div className="prod-design">
          <img src={icon3} alt="icon3" />
          <p>Product Design</p>
        </div>
      </div>
    </>
  );
}

export default Shortcuts;
