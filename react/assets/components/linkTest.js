import '../less/linkTest.less';
import React, { Component } from 'react';
import Router from 'next/router';
// import Link from 'next/link';
// Utilisez cette option plutôt que Router.push
// pour changer complètement de page comme sur un framework plus trad..



class LinkTest extends Component {
  constructor(props) {
    super(props);
    this.showPage = this.showPage.bind(this);
  }

  // dismissModal () {
  //   Router.push('/')
  // }

  showPage(e, exParam) {
    e.preventDefault();
    Router.push(
      `/?exampleParameter=${exParam}`,
      `/pageTest?exampleParameter=${exParam}`
    );
  }

  render() {
    const exParam = 'String dans la variable exampleParameter donnée en paramètre';
    const aProps = {
      className: 'aLink',
      href: `/pageTest?exampleParameter=${exParam}`,
      onClick: e => this.showPage(e, exParam)
    };

    return <div className="link">
      <a {...aProps}>Trolo</a>
    </div>;
  }
}

export default LinkTest;
