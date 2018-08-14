import '../assets/less/pageTest.less';
import React, { Component } from 'react';



class PageTest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <div className="pagetest">
      <h1>Ici le param</h1>
    </div>;
  }
}

export default PageTest;
