import React from 'react';
import { Link } from 'react-router-dom';
import { destroyJwtCookie } from 'Utils/jwtCookie';
import 'Styles/sideBar.less';

export default () => {
  return <div className="sideBar">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/dating">Dating</Link>
    <Link to="/messages">Messages</Link>
    <Link to="/users">Users</Link>
    <Link to="/users">Users</Link>
    <a href="/" atClick={() => destroyJwtCookie() }>Logout</a>
  </div>;
};
