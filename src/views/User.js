import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from './../react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';

export default class User extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/user/list">UserList</Link>
          <Link to="/user/add">UserAdd</Link>
        </div>
        <div>
          <Switch>
            <Route path="/user/list" component={UserList}></Route>
            <Route path="/user/add" component={UserAdd}></Route>
            <Redirect to="/user/list" />
          </Switch>
        </div>
      </div>
    );
  }
}
