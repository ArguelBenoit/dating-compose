import React from 'react';
import Head from 'next/head';

export default props => {
  return <Head>
    <title>{props.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
  </Head>;
};
