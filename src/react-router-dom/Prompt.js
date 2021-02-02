import React, { Component } from 'react';
import context from './context';
export default class Prompt extends Component {
  static contextType = context;
  render() {
    this.history = this.context.history;
    const { when, message } = this.props;
    if (when) {
      this.history.block(message)
    } else {
      this.history.block(null)
    }
    return <div></div>;
  }
}
