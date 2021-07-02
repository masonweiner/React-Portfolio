import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

// coffee: #3B2C35
// darkGreen: #5B6C5D
// ocean: #59C9A5
// aqua: #56E39F
const bodyStyle = {
  background: "#3B2C35",
  border: "5px solid #59C9A5",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const headerStyle = {
  height: "85%",
  flexGrow: "1",
};

const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

function App() {
  return (
    <>
      <body style={bodyStyle}>
        <Header style={headerStyle} />
        <Footer style={footerStyle} />
      </body>
    </>
  );
}

export default App;
