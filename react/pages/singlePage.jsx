import '../css/index.less';
import React from 'react';
import MyHead from '../components/head';
import SideBar from '../components/sideBar';
import RightContent from '../components/rightContent';


export default props => {
  return <div>
    <MyHead title={props.url.query.h1} />
    <div className="flexContainer">
      <SideBar />
      <RightContent content={props.url.query} />
    </div>
  </div>;

};
