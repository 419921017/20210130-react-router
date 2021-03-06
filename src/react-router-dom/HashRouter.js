import React, { Component } from 'react';
import Context from './context';

export default class HashRouter extends Component {
  static contextType = Context;
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: null,
      // pathname: '/',
    },
  };
  locationState = null;
  componentDidMount() {
    window.location.hash = window.location.hash || '/';
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.locationState,
        },
      });
    });
  }
  componentWillUnmount() {
    this.context.history.block(null);
  }
  render() {
    let that = this;
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          if (that.message) {
            let confirm = window.confirm(
              that.block(typeof to === 'object' ? to : { pathname: to })
            );
            if (!confirm) {
              return;
            }
          }
          if (typeof to === 'object') {
            let { pathname: path, state } = to;
            that.locationState = state;
            window.location.hash = path;
          } else {
            that.locationState = null;
            window.location.hash = to;
          }
        },
        block(message) {
          that.message = message;
        },
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
