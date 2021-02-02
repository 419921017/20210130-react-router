import React from 'react';
import { Route } from './index';

const withRouter = (WrapperComponent) => (props) => (
  <Route component={WrapperComponent}></Route>
);
export default withRouter;
