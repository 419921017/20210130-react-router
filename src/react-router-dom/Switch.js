import React, { Component } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import Context from './context';

export default class Switch extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location; // 当前地址栏的路径
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      let { path = '/', exact = false } = child.props;
      let paramNames = [];
      let regexp = pathToRegexp(path, paramNames, {
        end: exact
      });
      let result = pathname.match(regexp);
      console.log('result', result);

      if (result) {
        console.log('child', child);
        return child;
      }
    }

    return null;
  }
}
