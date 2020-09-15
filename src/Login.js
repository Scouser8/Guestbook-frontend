import React, { useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import axios from "./axios";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const [formData, updateFormData] = useState({
    user_name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(formData);
    axios.post("/user/login", formData).then((res) => {
      if (res.data !== "Wrong Password") {
        console.log(res.data);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.data,
        });
      }
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <Form onSubmit={login} className="login__form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login__formLabel">User name</Form.Label>
            <Form.Control
              name="user_name"
              type="text"
              placeholder="Enter username"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="login__formLabel">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Group>
          <button className="login__formSubmit" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
