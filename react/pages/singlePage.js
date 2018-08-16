import '../assets/less/index.less';
import React from 'react';
import MyHead from '../assets/components/head';
import SideBar from '../assets/components/sideBar';
import RightContent from '../assets/components/rightContent';


export default props => {
  return <div>
    <MyHead title={props.url.query.h1} />
    <div className="flexContainer">
      <SideBar />
      <RightContent content={props.url.query} />
    </div>
  </div>;

};
