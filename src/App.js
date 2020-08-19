import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar/index";
import CustomNavbar from "./components/CustomNavbar/index";
import Youtube from "./components/Youtube";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <CustomNavbar />
      <SideBar />
      <Youtube />
      <Main />
    </div>
  );
}

export default App;
