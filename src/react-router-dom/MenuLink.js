/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: power_840
 * @Date: 2021-02-01 21:34:23
 * @LastEditors: power_840
 * @LastEditTime: 2021-02-01 21:41:31
 */

import React from "react";
import { Route, Link } from "react-router";
// 路由渲染内容有3种
// component render只有在路径匹配的时候再渲染
// children不管路径匹配不匹配都渲染
function MenuLink(props) {
  let { to, exact, children } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={(props) => (
        <li className={props.match ? "active" : ""}>
          <Link to={to} exact={exact}>
            {children}
          </Link>
        </li>
      )}
    ></Route>
  );
}

export default MenuLink;
