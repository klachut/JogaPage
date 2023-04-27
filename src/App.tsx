import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./styles.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./external/menuItems";
import Footer from "./components/Footer";
function App() {
  //  const fcn = async () => {
  //   const response = await fetch("https://firestore.googleapis.com/v1/projects/joga-page/databases/(default)/documents/events/");
  // const data = await response.json();
  // console.log (data);
  //  }

  return (
    <>
      <NavBar />

      <Routes>
        {routes.map((x) => (
          <Route path={x.route} element={x.component} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
