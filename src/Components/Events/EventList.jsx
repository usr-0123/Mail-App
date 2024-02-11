import Post1 from "../../assets/";
import Post2 from "../../assets/";
import Post3 from "../../assets/";
import Post4 from "../../assets/";

export const eventCards = [
  {
    image: { Post1 },
    name: "National Seminar",
  },
  {
    image: { Post2 },
    name: "Poetry Workshop",
  },
  {
    image: { Post3 },
    name: "Up Summer Concert",
  },
  {
    image: { Post4 },
    name: "Painting Workshop"
  },
];

function Event() {
  return (
    <div className="cardList">
      {eventCards &&
        eventCards.map((item, index) => {
          const { image, alt } = item;
          return (
            <div key={index} className="eventCard">
              <img src={item.image} alt={item.alt} />
            </div>
          );
        })}
    </div>
  );
}
export default Event;
