import React, { Component } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import Context from './context';

export default class Route extends Component {
  static contextType = Context;
  render() {
    let { pathname } = this.context.location;
    let { path = '/', component: Component, exact = false } = this.props;
    let paramNames = [];

    let regexp = pathToRegexp(path, paramNames, { end: exact });

    let result = pathname.match(regexp);

    let props = {
      location: this.context.location,
    };

    if (result) {
      return <Component {...props}></Component>;
    }
    return null;
  }
}
