import React from "react";
import "./GoogleLogin.scss";
import { FcGoogle } from "react-icons/fc";
import { GOOGLE_AUTH_URL } from "../Constants/Google_Url";

function GoogleLogin() {
  return (
    <div className="google_login">
      <FcGoogle className="logo" />
      &nbsp;&nbsp;<a href={`${GOOGLE_AUTH_URL}`}>Sign In With Google</a>
    </div>
  );
}

export default GoogleLogin;
