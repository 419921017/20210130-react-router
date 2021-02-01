/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-01 19:47:48
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-01 21:32:03
 */
import React from "react";
import { Route, Redirect } from "react-router";

function Protected({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        props.login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    ></Route>
  );
}

export default Protected;
