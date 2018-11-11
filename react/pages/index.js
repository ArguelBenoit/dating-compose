import '../assets/css/index.less';
import React from 'react';
import MyHead from '../assets/components/head';
import SideBar from '../assets/components/sideBar';
import RightContent from '../assets/components/rightContent';


export default class extends React.Component {
  // static getInitialProps () {
  //   return {ex: 'ex1', ex2: 'ex2'};
  // }
  constructor (props) {
    super(props);
  }
  render () {
    return <div>
      <MyHead title="dating" />
      <div className="flexContainer">
        <SideBar />
        <RightContent />
      </div>
    </div>;
  }
}
