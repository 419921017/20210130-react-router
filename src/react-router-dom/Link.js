import React, { Component } from 'react';
import Context from './context';

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
      >
        {this.props.children}
      </a>
    );
  }
}
