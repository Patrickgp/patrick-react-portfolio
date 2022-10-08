import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="contact" className="my-5">
      <div className="container">
        <div className="row">
          <h2 className="project-header my-5 d-flex justify-content-center">
            Contact Me
          </h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                onBlur={handleChange}
                name="name"
                defaultValue={name}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                onBlur={handleChange}
                name="email"
                defaultValue={email}
              />
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                onBlur={handleChange}
                rows="5"
                defaultValue={message}
              />
            </div>
            {errorMessage && (
              <div className="d-flex justify-content-center">
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className="center-button">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
