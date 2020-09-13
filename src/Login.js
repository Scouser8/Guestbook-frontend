import React from "react";
import "./Login.css";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { Button, Form } from "react-bootstrap";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Form className="login__form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login__formLabel">User name</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="login__formLabel">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me?" />
          </Form.Group>
          <button className="login__formSubmit" type="submit">
          Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
