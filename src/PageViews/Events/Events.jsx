import "./Events.scss";

import Dots from "../../assets/chevron-down.png";
import Calender from "../../assets/Group.png";

import Month from "../../Components/Calender/Month";
// import Event from "../../Components/Events/EventList";

function Events() {
  const currentDate = new Date();

  return (
    <div className="events">
      <div className="FindEvents">
        <p>Find Event</p>
        <img src={Dots} alt="err" />
      </div>
      <div className="eventsTop">
        <div className="eventsNav">
          <p>Popular</p>
          <p>For You</p>
          <p>Nearest</p>
          <p>Favorite</p>
          <p>Registered</p>
        </div>
        <div className="Calender">
          <img src={Calender} alt="" />
          <Month />
          <p>
            <Month date={currentDate} />
          </p>
        </div>
      </div>
      <div className="fetchedEvents">
        {/* <Event /> */}
      </div>
    </div>
  );
}
export default Events;
