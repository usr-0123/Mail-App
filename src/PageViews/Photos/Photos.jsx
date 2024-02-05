import Dots from "../../assets/chevron-down.png";

const Photos = () => {
  return (
    <div className="photos">
      <div className="photosTop">
        <p>Your Photo</p>
        <img src={Dots} alt="err" />
      </div>
      <div className="photosNav">
        <p>Photos About You</p>
        <p>Your Photos</p>
        <p>Albums</p>
      </div>
      <div className="photosStats">
        <p>Total photos</p>
        <p>42 Total Photos About You</p>
      </div>
      <div className="photosBelow">picture album</div>
    </div>
  );
};

export default Photos;
