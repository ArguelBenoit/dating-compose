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
      mode: 0,
      animationOut: false,
      animationIn: true
    };
  }
  switchMode(event) {
    let { mode, animationOut } = this.state;
    event.preventDefault();
    this.setState({animationOut: !animationOut});
    setTimeout(() => this.setState(
      {
        mode: mode === 0 ? 1 : 0,
        animationOut: false
      }), 500);
  }
  render () {
    const { mode, animationOut } = this.state;
    const humanMode = [
      'login',
      'subscribe'
    ];
    return <div className="container-page">
      <MyHead title={`Dating ${mode === 0 ? humanMode[0] : humanMode[1]}`} />
      <div className={`container-form ${humanMode[mode]} ${animationOut ? 'animationOut' : ''}`}>
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
