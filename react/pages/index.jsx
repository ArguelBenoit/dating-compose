import React from 'react';
import { JwtCookieOrRedirect } from '../utils/jwtCookie';
import MyHead from '../components/head';
import SideBar from '../components/sideBar';
import RightContent from '../components/rightContent';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    JwtCookieOrRedirect('/login');
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
