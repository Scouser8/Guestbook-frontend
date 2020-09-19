import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import axios from "./axios";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const [formData, updateFormData] = useState({
    user_name: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  let history = useHistory();

  const handleInputChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmRegistration = async (e) => {
    e.preventDefault();
    let e_target = e.target;
    console.log(formData);
    await axios.post("/user/register", formData).then((res) => {
      if (res.data === "Invalid") {
        alert("username already exists.");
      } else if (res.data === "Error") {
        alert("An error occured, couldn't create your new account.");
      } else {
        alert("New account created, welcome to guestbook community :)");
        history.push("/");
      }
    });
    e_target.reset();
  };
  return (
    <div className="register">
      <Form onSubmit={confirmRegistration} className="register__form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="register__formLabel">User name</Form.Label>
          <Form.Control
            name="user_name"
            type="text"
            placeholder="Set username"
            onChange={handleInputChange}
            required={true}
            autoFocus
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="register__formLabel">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Set password"
            onChange={handleInputChange}
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="register__formLabel">
            First Name (Optional)
          </Form.Label>
          <Form.Control
            name="first_name"
            type="text"
            placeholder="Enter firstname"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="register__formLabel">
            Last Name (Optional)
          </Form.Label>
          <Form.Control
            name="last_name"
            type="text"
            placeholder="Enter lastname"
            onChange={handleInputChange}
          />
        </Form.Group>
        <button className="register__formSubmit" type="submit">
          Register
        </button>
      </Form>
      <Link to="/">
        <button className="register__loginBtn" type="submit">
          Back to Login
        </button>
      </Link>
    </div>
  );
}

export default Register;
