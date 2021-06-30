import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

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

  const handleFormSubmit = (e) => {};

  const validateEmail = (email) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div>
      <p>Contact</p>
      <form class="row row-cols-lg-auto g-3 align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="name"
          aria-label="Name"
          name="name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          class="form-control"
          placeholder="email"
          aria-label="email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          class="form-control"
          placeholder="message"
          aria-label="message"
          name="message"
          onChange={handleChange}
        ></input>
        <p>{errorMessage}</p>
        <button>Contact Me</button>
      </form>
    </div>
  );
}

export default Contact;
