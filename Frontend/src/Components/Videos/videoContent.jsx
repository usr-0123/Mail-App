import "./videoContent.scss";

import VideoPreview1 from "../../assets/VideoPreview1.jfif";
import VideoPreview2 from "../../assets/VideoPreview2.jfif";
import VideoPreview3 from "../../assets/VideoPreview3.jfif";
import Stats from "../../assets/user4s.png";

export const videos = [
  {
    image: VideoPreview1,
    alt: "no preview",
    name: "Music",
  },
  {
    image: VideoPreview2,
    alt: "no preview",
    name: "Family",
  },
  {
    image: VideoPreview3,
    alt: "no preview",
    name: "Kids",
  },
  {
    image: VideoPreview1,
    alt: "no preview",
    name: "Music",
  },
  {
    image: VideoPreview2,
    alt: "no preview",
    name: "Family",
  },
  {
    image: VideoPreview3,
    alt: "no preview",
    name: "Kids",
  },
];

const Videos = () => {
  return (
    <div className="videoData">
      <div className="videosCard">
        {videos &&
          videos.map((item, index) => {
            const { image, alt, name } = item;
            return (
              <div key={index} className="videoCard">
                <div className="videoCardImage">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="about">
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <img src={Stats} alt="no stats" />
                  </div>
                </div>
                <div className="button">
                  <button>See all</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Videos;
