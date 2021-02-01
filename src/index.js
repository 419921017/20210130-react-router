import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from './react-router-dom';
import './index.css';
import Home from './views/Home';
import User from './views/User';
import Profile from './views/Profile';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to={{ pathname: '/user', state: { title: '用户' } }}>USER</Link>
        <Link to={{ pathname: '/profile', state: { title: '个人中心' } }}>
          PROFILE
        </Link>
      </nav>
      <>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/profile" component={Profile}></Route>
      </>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
