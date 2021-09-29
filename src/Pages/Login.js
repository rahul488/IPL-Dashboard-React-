import React from "react";
import * as Yup from "yup";
import LoginUtill from "../Utill/LoginUtill";
import GoogleLogin from "./GoogleLogin";
import "./Login.scss";
import { Form, Formik } from "formik";
import axios from "axios";
import { base_url } from "../Constants/base_url";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../Actions/IsLogin";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(6, "Must be 6 characters or less")
      .min(4, "At least 4 characters long")
      .required("Required"),
  });

  const onSubmit = (values) => {
    axios.post(`${base_url}/generateToken`, values).then(
      (response) => {
        console.log(response);
        localStorage.setItem("token", response.data[2]);
        dispatch(isLoggedIn(response.data[0], response.data[1]));
        history.push("/");
      },
      (error) => {
        toast.error("Login Failed", { position: toast.POSITION.TOP_CENTER });
      }
    );
  };

  return (
    <div className="login_page">
      <div className="login_form">
        <GoogleLogin />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <LoginUtill name="Login" />
          </Form>
        </Formik>
        <div data-test="div"></div>
      </div>
    </div>
  );
}

export default Login;
