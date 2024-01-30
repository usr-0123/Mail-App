import { useState } from "react";
import "./App.css";
import Sidebar from "./Layout/Sidebar";
import Navbar from "./Layout/Navbar";
import Aside from "./Layout/Aside";
import Content from "./Layout/Content";
// import Center from "./Layout/Center";

function App() {
  return (
    <div className="main">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="right">
        <header className="navbar">
          <Navbar />
        </header>
        <div className="container">
          <div className="content">
            <Content />
          </div>
          <aside className="aside">
            <Aside />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
