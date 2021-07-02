import React, { useState } from "react";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

// coffee: #3B2C35
// darkGreen: #5B6C5D
// ocean: #59C9A5
// aqua: #56E39F
//create styles object to carry style settings
const aqua = { color: "#56E39F" };
const darkGreen = { color: "#5B6C5D" };
const ocean = { color: "#59C9A5" };
const coffee = { color: "#3B2C35" };

const h1Style = {
  display: "flex",
  width: "50%",
  color: "#56E39F",
  fontSize: "px",
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "85%",
};

const navStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const highlightStyle = {
  backgroundColor: "#3B2C35",
};
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
    <header className="header container-fluid" style={headerStyle}>
      <h1 className="card-text" style={h1Style}>
        Mason Weiner
      </h1>
      <div>
        <nav
          className="navbar container-fluid align-items-center"
          style={navStyle}
        >
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            style={highlightStyle}
          />
          <div className="container-fluid align-items-center justify-content-center">
            {renderPage(currentPage)}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
