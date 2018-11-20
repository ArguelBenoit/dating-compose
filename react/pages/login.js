import '../assets/css/index.less';
import '../assets/css/login.less';
import React from 'react';
import MyHead from '../assets/components/head';
import Login from '../assets/components/login';
import Subscribe from '../assets/components/subscribe';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 0
    };
  }
  switchMode(event) {
    let { mode } = this.state;
    event.preventDefault();
    this.setState({mode: mode === 0 ? 1 : 0});
  }
  render () {
    const { mode } = this.state;
    const humanMode = [
      'login',
      'subscribe'
    ];
    return <div className="container-page">
      <MyHead title={`Dating ${mode === 0 ? humanMode[0] : humanMode[1]}`} />
      <div className="container-form">
        {mode === 0 ?
          <Login /> :
          <Subscribe />
        }
        <a href="" onClick={e => this.switchMode(e)}>
          Switch to {humanMode[mode === 0 ? 1 : 0]}
        </a>
      </div>
    </div>;
  }
}
