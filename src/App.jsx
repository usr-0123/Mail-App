import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./Layout/Home";
import LoginRegister from "./Layout/RegisterLogin/LoginRegister";
import Friends from "./PageViews/Friends/Friends";
import Timeline from "./PageViews/Timeline/Timeline";
import Groups from "./PageViews/Groups/Groups";
import Videos from "./PageViews/Videos/Video";
import Events from "./PageViews/Events/Events";
import Notification from "./PageViews/Notification/Notification";


function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
