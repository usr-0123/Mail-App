import Aside from "./Aside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "../PageViews/Friends/Friends";
import Timeline from "../PageViews/Timeline/Timeline";
import Groups from "../PageViews/Groups/Groups";
import Videos from "../PageViews/Videos/Video";
import Events from "../PageViews/Events/Events";
import Notification from "../PageViews/Notification/Notification";
import Profile from "../PageViews/Profile/Content";
import Photos from "../PageViews/Photos/Photos";
import "./BottomRightContainer.scss";
import Sidebar from "./Sidebar";

function BottomRightContainer() {
  return (
    <div className="BottomRightContainer">
      <div className="desktop-Bottomrcontainer">
        <div className="desktop-Bottomrcontainer">
          <div className="content">
            <Routes>
              <Route path="/*" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/events" element={<Events />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </div>
          <div className="aside">
            <Aside />
          </div>
        </div>
      </div>
      <div className="mobile-Bottomrcontainer">
        <div className="content">
          <Routes>
            <Route path="/*" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/aside" element = {<sidebar/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default BottomRightContainer;
