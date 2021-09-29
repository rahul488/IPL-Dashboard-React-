import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

function GuarderRoute({ component: Component, ...rest }) {
  let isLoggedin = useSelector((state) => state.isLogin.isLoggedin);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export default GuarderRoute;
