import '../css/index.less';
import '../css/login.less';
import React from 'react';
import MyHead from '../components/head';
import Login from '../components/login';
import Subscribe from '../components/subscribe';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 0,
      animationStyle: {
        transitionDuration: '600ms',
        transform: 'translateY(0px)',
        opacity: 1
      }
    };
  }
  componentDidMount() {
    this.enterAnimation();
  }
  enterAnimation() {
    this.setState({
      animationStyle: {
        transitionDuration: '600ms',
        transform: 'translateY(0px)',
        opacity: 1
      }
    });
  }
  switchMode(event) {
    let { mode } = this.state;
    event.preventDefault();
    // sortie du formulaire
    this.setState({
      animationStyle: {
        transitionDuration: '600ms',
        transform: 'translateY(20px)',
        opacity: 0
      }
    });
    // repositionnement du formulaire avant arrivé
    setTimeout(
      () => this.setState({
        mode: mode === 0 ? 1 : 0,
        animationStyle: {
          transitionDuration: '0ms',
          transform: 'translateY(-20px)',
          opacity: 0
        }
      })
    ,600);
    // repositionnement du formulaire
    setTimeout(
      () => this.setState({
        mode: mode === 0 ? 1 : 0,
        animationStyle: {
          transitionDuration: '600ms',
          transform: 'translateY(0px)',
          opacity: 1
        }
      })
    ,650);
  }
  render () {
    const { mode, animationStyle } = this.state;
    const humanMode = [
      'login',
      'subscribe'
    ];
    let propsContainerForm = {
      className: `container-form ${humanMode[mode]}`,
      style: animationStyle
    };
    return <div
      ref="container"
      className="container-page"
      style={{backgroundImage: 'url("static/dating.jpg")'}}>
      <MyHead title={`Dating ${mode === 0 ? humanMode[0] : humanMode[1]}`} />
      <div className="container-container-form">
        <div {...propsContainerForm}>
          {mode === 0 ?
            <Login /> :
              <Subscribe />
            }
            <a href="" onClick={e => this.switchMode(e)}>
              Switch to {humanMode[mode === 0 ? 1 : 0]}
            </a>
          </div>
      </div>
    </div>;
  }
}
