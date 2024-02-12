import Card1 from "./Card1";
import Card2 from "./Card2";
import "./SuggestedContent.scss";

const SuggestedContent = () => {
  return (
    <div className="card">
      <div>
        <Card1 />
      </div>
      <div>
        <Card2 />
      </div>
    </div>
  );
};

export default SuggestedContent;
