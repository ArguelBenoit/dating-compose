import React from 'react';
import Link from 'next/link';
import '../less/sideBar.less';


export default () => {

  let loremIpsum = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non  numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur';

  let pages = [];
  for(let index = 1; index <= 5; index++) {
    let trololo = {
      pathname: '/singlePage',
      query: {
        h1: `A great title ${index}`,
        p: loremIpsum
      }
    };
    pages.push(
      <li key={`li${index}`}>
        <Link prefetch href={trololo}>
          <a>{`Page ${index}`}</a>
        </Link>
      </li>
    );
  }

  return <div className="sideBar">
    <p>Example menu</p>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>HomePage</a>
        </Link>
      </li>
      {pages}
    </ul>
  </div>;

};
