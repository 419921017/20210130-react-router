import React, { Component } from 'react';
import Context from './context';

let oldPushState = window.history.pushState;

window.history.pushState = function (state, title, pathname) {
  window.onpushstate(state, title, pathname);
  oldPushState.call(window.history, state, title, pathname);
};

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
    // window.location.hash = window.location.hash || '/';
    // window.addEventListener('hashchange', () => {
    window.onpopstate = (event) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.pathname,
          state: event.state,
        },
      });
    };
    window.onpushstate = (state, title, pathname) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname,
          state,
        },
      });
    };
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
            // window.location.hash = path;
            window.history.pushState(state, '', path);
          } else {
            that.locationState = null;
            // window.location.hash = to;
            window.history.pushState(null, '', to);
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
