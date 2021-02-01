/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-01 18:30:48
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-01 19:33:07
 */
import React, { Component } from "react";
import { pathToRegexp } from "path-to-regexp";
import Context from "./context";

export default class Route extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location;
    let { path = "/", component: Component, exact = false } = this.props;
    let paramNames = [];

    let regexp = pathToRegexp(path, paramNames, { end: exact });

    let result = pathname.match(regexp);

    let props = {
      location: this.context.location,
      push: this.context.history.push,
    };

    if (result) {
      paramNames = paramNames.map((item) => item.name);
      let [url, ...values] = result;
      let params = {};
      paramNames.forEach((param, i) => {
        params[param] = values[i];
      });
      props.match = {
        params,
        url,
        path,
        isExact: url === pathname,
      };
      return <Component {...props}></Component>;
    }
    return null;
  }
}
