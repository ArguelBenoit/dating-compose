import React from 'react';
import '../css/rightContent.less';

export default props => {
  return <div className="rightContent">
    <div className="container">
      <div className="row">
        <div className="columns twelve">
          <h1>
            {props.content && props.content.h1 ?
              props.content.h1 :
              'Default Title'
            }
          </h1>
          <p>
            {props.content && props.content.p ?
              props.content.p :
              'Default paragraph'
            }
          </p>
        </div>
      </div>
    </div>
  </div>;

};
