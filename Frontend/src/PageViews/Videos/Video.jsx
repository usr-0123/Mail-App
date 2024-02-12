import "./Video.scss";
import VideoContent from "../../Components/Videos/videoContent";

import Search from "../../assets/search.png";
import VideoPost from "../../assets/videoPostPreview.jfif";
import ProfilePicture from "../../assets/Avatar.png";
import VertivalDots from "../../assets/dots-vertical.png";

function Video() {
  return (
    <div className="Videos">
      <div className="videosTop">
        <div className="videosHeader">
          <p style={{ fontWeight: "700", fontSize: "22px" }}>Video</p>
          <img src={Search} alt="err" />
        </div>
        <div className="videosNav">
          <p style={{ color: "#0F172A", fontWeight: "600", fontSize: "16px" }}>
            Categories to explore
          </p>
          <p style={{ color: "#2563EB", fontSize: "14px", fontWeight: "700" }}>
            See all
          </p>
        </div>
        <div className="videosContent">
          <VideoContent />
        </div>
      </div>
      <div className="videosBottom">
        <div className="videoPostProfile">
          <div className="userVideoProfile">
            <div>
              <img src={ProfilePicture} alt="" />
            </div>
            <div>
              <p
                style={{
                  color: "#0F172A",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Angela Lee
              </p>
              <p
                style={{
                  color: "#94A3B8",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                56 mins ago
              </p>
            </div>
          </div>
          <div>
            <img src={VertivalDots} alt="err" />
          </div>
        </div>
        <div>
          <p className="videoPostCaption">
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="videoPostPreview">
          <img src={VideoPost} alt="no preview" />
        </div>
      </div>
    </div>
  );
}
export default Video;
