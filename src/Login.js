import React, { useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import axios from "./axios";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

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
    console.log(formData);
    axios.post("/user/login", formData).then((res) => {
      if (res.data === "Wrong Password" || res.data === "bad user") {
        let message = document.getElementById("login__failedMsg");
        message.style.display = "inline";
      } else {
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
        <Form onSubmit={login} className="login__form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login__formLabel">User name</Form.Label>
            <Form.Control
              className="login__input"
              name="user_name"
              type="text"
              placeholder="Enter username"
              onChange={handleInputChange}
              required={true}
              autoFocus
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="login__formLabel">Password</Form.Label>
            <Form.Control
              className="login__input"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Group>
          <h6 id="login__failedMsg">
            Please enter correct username or password.
          </h6>
          <button className="login__formSubmit" type="submit">
            Login
          </button>
        </Form>
        <Link to="/register">
          <button className="login__registerBtn" type="text">
            Register
          </button>
        </Link>
    </div>
  );
}

export default Login;
