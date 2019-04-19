import React from 'react';
import { Route } from 'react-router-dom';
import { getJwtCookie } from 'Utils/jwtCookie';
import history from 'Utils/history';
import background from 'Images/dating.jpg';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '~/config.js';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loged: false
    };
  }
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + getJwtCookie();
    axios
      .get(config.apiUrl + '/api/ping').then(() => {
        this.setState({loged: true});
      }).catch(() => {
        this.setState({loged: false});
        history.push('/');
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.path !== prevProps.path) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + getJwtCookie();
      axios
        .get(config.apiUrl + '/api/ping').then().catch(() => {
          history.push('/');
        });
    }
  }
  render() {
    const {
      component: Component,
      ...rest
    } = this.props;
    const { loged } = this.state;
    if (loged) {
      return <Route {...rest} render={props => <Component {...props} />} />;
    } else {
      return <div
        ref="container"
        className="container-page"
        style={{backgroundImage: `url('${background}')`}}
      />;
    }
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string
};

export default PrivateRoute;
