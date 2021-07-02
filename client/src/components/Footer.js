import React from "react";
const footerStyle = {
  backgroundColor: "#56E39F",
  border: "5px solid #3B2C35",
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "5px",
};
const btnStyle = {
  backgroundColor: "#3B2C35",
  padding: "15px",
  fontSize: "20px",
  color: "#56E39F",
  borderRadius: "25px",
  border: "5px solid #0390fc",
  width: "200px",
  flexGrow: "1",
};
function Footer() {
  return (
    <>
      <div className="footer" style={footerStyle}>
        <a href="https://www.linkedin.com/in/mason-weiner-64ab0220a/">
          <button style={btnStyle}>LinkedIn</button>
        </a>
        <a href="https://github.com/masonweiner">
          <button style={btnStyle}>GitHub</button>
        </a>

        <a href="https://www.instagram.com/mason_weiner/">
          <button style={btnStyle}>Instagram</button>
        </a>
      </div>
    </>
  );
}

export default Footer;
