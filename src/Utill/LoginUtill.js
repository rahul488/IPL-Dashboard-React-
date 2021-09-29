import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import "../Pages/Login.scss";
import { ErrorMessage, Field } from "formik";
import Error from "./Error";

function LoginUtill({ name }) {
  return (
    <>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Field
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter Your Email"
          className="input_box"
        />
      </FormGroup>
      <ErrorMessage name="email" component={Error} />
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Field
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Enter Your Password"
          className="input_box"
        />
      </FormGroup>
      <ErrorMessage name="password" component={Error} />
      <div className="btn">
        <Button color="primary" data-test="submit" type="submit">
          {name}
        </Button>
      </div>
    </>
  );
}

export default LoginUtill;
