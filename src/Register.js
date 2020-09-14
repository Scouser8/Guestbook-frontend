import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import axios from "./axios";

function Register() {
  const [formData, updateFormData] = useState({
    user_name: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleInputChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmRegistration = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(formData);
    axios.post("/user/register", formData).then((res) => {
      console.log(res.data);
    });
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
          <Form.Label className="register__formLabel">First Name</Form.Label>
          <Form.Control
            name="first_name"
            type="text"
            placeholder="Enter firstname"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="register__formLabel">Last Name</Form.Label>
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
    </div>
  );
}

export default Register;
