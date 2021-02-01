/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-01 18:30:48
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-01 21:49:33
 */
import React, { Component } from "react";
import Context from "./context";

export default class Link extends Component {
  static contextType = Context;

  render() {
    return (
      // <a href={`#${this.props.to}`}>
      //   {this.props.children}
      // </a>
      <a
        href="javascript:void(0)"
        onClick={() => {
          this.context.history.push(this.props.to);
        }}
        {...this.props}
      >
        {this.props.children}
      </a>
    );
  }
}
