import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  let submitMessage = "";

  const handleChange = (e) => {
    if (e.target.name === "name") {
      const name = e.target.value;
      if (!name) {
        setErrorMessage("Please enter your name");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "email") {
      const email = e.target.value;
      const isValid = validateEmail(email);
      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      const message = e.target.value;
      if (!message) {
        setErrorMessage("Please enter a message");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (errorMessage === "") {
      submitMessage = "Message submitted!";
    }
  };

  const validateEmail = (email) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const contactStyle = {};

  const h3Style = {
    color: "#59C9A5",
  };

  const inputStyle = {
    borderRadius: "15px",
    border: "4px solid #59C9A5",
    padding: "50px",
  };

  const submitStyle = {
    backgroundColor: "#59C9A5",
    color: "#3B2C35",
  };

  return (
    <div>
      <h3 style={h3Style}>Contact</h3>
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          aria-label="Name"
          name="name"
          onChange={handleChange}
          style={inputStyle}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          aria-label="email"
          name="email"
          onChange={handleChange}
          style={inputStyle}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="message"
          aria-label="message"
          name="message"
          onChange={handleChange}
          style={inputStyle}
        ></input>
        <p style={h3Style}>{errorMessage}</p>
        <input
          type="submit"
          value="Submit"
          className="btn btn-success"
          onClick={handleFormSubmit}
          style={submitStyle}
        />
        <p>{submitMessage}</p>
      </form>
    </div>
  );
}

export default Contact;
