import Aside from "./Aside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "../PageViews/Friends/Friends";
import Timeline from "../PageViews/Timeline/Timeline";
import Groups from "../PageViews/Groups/Groups";
import Videos from "../PageViews/Videos/Video";
import Events from "../PageViews/Events/Events";
import Notification from "../PageViews/Notification/Notification";
import Profile from "../PageViews/Profile/Content";
// import Home from "../Layout/Home";

import "./BottomRightContainer.css";

function BottomRightContainer() {
  return (
    <div className="bottomrcontainer">
      <div className="content">
        <Routes>
          {/* <Routes> */}
            <Route path="/" element={<Profile />} />
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/friends" element={<Friends />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/group" element={<Groups />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notification" element={<Notification />} />
          {/* </Routes> */}
        </Routes>

      </div>
      <div className="aside">
        <Aside />
      </div>
    </div>
  );
}

export default BottomRightContainer;
