import React, { useState } from "react";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

//create styles object to carry style settings
const styles = {};

function Header() {
  // Using useState, set the default value for currentPage to 'About Me'
  const [currentPage, handlePageChange] = useState("About Me");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <header className="header">
      <p className="card-text">Mason Weiner</p>
      <div className="navbar container-fluid align-items-center">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div className="container-fluid align-items-center">
          {renderPage(currentPage)}
        </div>
      </div>
    </header>
  );
}

export default Header;
