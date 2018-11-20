import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <div>
      <h1>Subscribe</h1>
      <form action="onSubmit">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="LastName" />
        <input type="text" placeholder="FirstName" />
        <input type="password" placeholder="PassWord" />
        <input type="text" placeholder="Sexe"/>
        <input type="date" placeholder="date of birth"/>
        <input type="text" placeholder="city"/>
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>;
  }
}
