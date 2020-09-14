import React, { useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import axios from "./axios";
import { actionTypes } from "./reducer";
import { useStateValue} from "./StateProvider";

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
      if (res.data === "Logged In") {
        dispatch({
          type: actionTypes.SET_USER,
          user: true,
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
              placeholder="Set username"
              onChange={handleInputChange}
              required={true}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="login__formLabel">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Set username"
              onChange={handleInputChange}
              required={true}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me?" />
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
