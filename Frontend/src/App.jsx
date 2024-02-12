import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./PageViews/RegisterLogin/Register";
import Login from "./PageViews/RegisterLogin/Login";
import Main from "./Layout/Home";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Register/>}></Route>
      <Route path="/register" element = {<Register/>}></Route>
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/*" element = {<Main/>}/>
    </Routes>
    </>
  );
}

export default App;
