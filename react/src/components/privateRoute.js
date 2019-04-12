import React from 'react';
import { Route } from 'react-router-dom';
import { PromiseJwtCookieIsValid } from 'Utils/jwtCookie';
import history from 'Utils/history';
import PropTypes from 'prop-types';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loged: false
    };
  }
  componentDidMount() {
    // if (window.location.pathname !== '/') {
    //   PromiseJwtCookieIsValid.then(() => {
    //     this.setState({loged: true});
    //   }).catch(() => {
    //     this.setState({loged: false});
    //     history.push('/');
    //   });
    // }
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const { loged } = this.state;
    if (loged) {
      return <Route {...rest} render={props => <Component {...props} />} />;
    } else {
      return '';
    }
  }
}
