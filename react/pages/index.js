import '../assets/less/index.less';
import React from 'react';
import LinkTest from '../assets/components/linkTest';


export default class extends React.Component {
  // static getInitialProps () {
  //   return {ex: 'ex1', ex2: 'ex2'};
  // }
  constructor (props) {
    super(props);
  }
  render () {
    return <div>
      <div className="sideBar">
        <LinkTest />
      </div>
    </div>;
  }
}
