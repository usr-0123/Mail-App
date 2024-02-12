import photo1 from "../assets/unsplash1.png"
import photo2 from "../assets/unsplash2.png"
import "./Photos.css";

function Photos() {
  return (
    <div className="photosContainer">
      <div className="header">
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600" }}>Photos</p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: "400", color: "#2563EB" }}>
            See all
          </p>
        </div>
      </div>
      <div className="images">
        <img src={photo1} alt="noImg" />
        <img src={photo2} alt="noImg" />
      </div>
    </div>
  );
}
export default Photos;
