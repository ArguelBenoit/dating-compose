import React from 'react';
import PropTypes from 'prop-types';

export default ({ location }) => {
  return <div>{location.pathname} : 404</div>;
};
