import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../css/skeleton.less';

const MyHead = props => {
  let { title } = props;
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
  </Head>;
};

MyHead.propTypes = {
  title: PropTypes.string
};

export default MyHead;
