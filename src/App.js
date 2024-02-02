import React from "react";
import CarMenu from "./components/CarMenu/CarMenu";
import FristBody from "./components/FristBody/FristBody";
import NavBar from "./components/Nav/NavBar";
import {FloatButton } from "antd";
import CarDetils from "./components/CarImage/CarDetils";
import CruiserSec from "./components/CruiserSec/CruiserSec";
import CarTypes from "./components/CarTypes/CarTypes";
import { StyledEngineProvider } from "@mui/material";
import Footer from "./components/Footer/Footer";


const App =() => {
  const flootbtn = {
    width:"30px",
    height:"30px"
  }
  return (
    <>
      <NavBar/>
      <FristBody/>
      <CarMenu/>
      <CarDetils/>
      <CruiserSec/>
      <StyledEngineProvider>
        <CarTypes/>
      </StyledEngineProvider>
      <Footer/>
      <FloatButton.BackTop style = {flootbtn}/>
    </>
  );
}

export default App;
