import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import 'Styles/skeleton.less';
import '@babel/polyfill';
import history from 'Utils/history';
import PrivateRoute from 'Components/privateRoute';
// pages
import Login from 'Pages/login';
import Dashboard from 'Pages/dashboard';
import Profile from 'Pages/profile';
import Dating from 'Pages/dating';
import Messages from 'Pages/messages';
import Users from 'Pages/users';
import Error from 'Pages/error';


class App extends React.Component {
  render() {
    return <Router history={history} >
      <Switch>
        <Route path="/" exact component={Login} title="Login and subscribe" />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/dating" exact component={Dating} />
        <PrivateRoute path="/messages" exact component={Messages} />
        <PrivateRoute path="/users" exact component={Users} />
        <Route component={Error} />
      </Switch>
    </Router>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
