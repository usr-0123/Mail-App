import VideoContent from "../../Components/Videos/videoContent";

import Search from "../../assets/search.png";
import VideoPost from "../../assets/PostedVideo.png";

function Video() {
  return (
    <div className="Videos">
      <div className="videosTop">
        <div>
          <p>Video</p>
          <img src={Search} alt="err" />
        </div>
        <div>
          <p>Categories to explore</p>
          <p>See all</p>
        </div>
        <div>
          <VideoContent />
        </div>
      </div>
      <div className="videosBottom">
        <div>Profile</div>
        <div>
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div>
          <img src={VideoPost} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Video;
