import React from "react";
import * as Yup from "yup";
import LoginUtill from "../Utill/LoginUtill";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import Error from "../Utill/Error";
import "./Login.scss";
import { base_url } from "../Constants/base_url";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router";

function SignUp() {
  const history = useHistory();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .min(4, "At least 4 characters long")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(6, "Must be 6 characters or less")
      .min(4, "At least 4 characters long")
      .required("Required"),
  });

  const onSubmit = (values) => {
    axios.post(`${base_url}/register`, values).then(
      (response) => {
        toast.success("Success", { position: toast.POSITION.BOTTOM_CENTER });
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      },
      (error) => {
        toast.error("Error occured", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    );
  };

  return (
    <div className="login_page">
      <div className="login_form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Field
                type="name"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="input_box"
              />
            </FormGroup>
            <ErrorMessage name="name" component={Error} />
            <LoginUtill name="signup" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
