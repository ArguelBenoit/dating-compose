import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <div>
      <h1>Login</h1>
      <form action="onSubmit">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="PassWord" />
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>;
  }
}
