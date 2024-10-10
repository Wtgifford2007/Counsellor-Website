// HomePage.js
import React from "react";
import NavigationBar from "./components/navbar";
import { useState } from "react";
import App from "./App";
import Report from "./Report";
import AboutUs from "./AboutUs";
import Contact from "./contact";

function PageNavigator() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavigationBar navigate={navigate} />
      {currentPage === "home" ? (
        <App />
      ) : currentPage === "aboutus" ? (
        <AboutUs />
      ) : currentPage === "report" ? (
        <Report />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : (
        ""
      )}
    </>
  );
}

export default PageNavigator;
