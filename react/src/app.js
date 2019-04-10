import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Styles/skeleton.less';

// pages
import Login from 'Pages/login';
import Index from 'Pages/Index';
import Error404 from 'Pages/error404';

class App extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/login' component={Login} title="Login and subscribe" />
        <Route component={Error404} />
      </Switch>
    </Router>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);