import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";

function Register() {
  const [formData, updateFormData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmRegistration = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(formData);
  };
  return (
    <div className="register">
      <Form onSubmit={confirmRegistration} className="register__form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="register__formLabel">User name</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            placeholder="Set username"
            onChange={handleInputChange}
            required={true}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
            name="firstName"
            type="text"
            placeholder="Enter firstname"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="register__formLabel">Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter lastname"
            onChange={handleInputChange}
          />
        </Form.Group>
        <button className="register__formSubmit" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default Register;
