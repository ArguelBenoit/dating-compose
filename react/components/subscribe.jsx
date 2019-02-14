import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      email: '',
      lastName: '',
      firstName: '',
      password: '',
      sexe: '',
      dob: '',
      city: ''
    };
  }
  changeValue(event, name) {
    let { value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render () {
    return <div className="subscribe">
      <h1>Subscribe</h1>
      <form action="onSubmit">
        <div className="row">
          <div className="columns six">
            <input type="text" placeholder="Last name" value={this.state.lastName} onChange={e => this.changeValue(e, 'lastName')} />
          </div>
          <div className="columns six">
            <input type="text" placeholder="First name" value={this.state.firstName} onChange={e => this.changeValue(e, 'firstName')} />
          </div>
        </div>
        <div className="row">
          <div className="columns six">
            <select className="u-full-width" value={this.state.sexe} onChange={e => this.changeValue(e, 'sexe')}>
              <option value="Sexe">Sexe</option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="columns six">
            <input type="text" placeholder="Date of birth" value={this.state.dob} onChange={e => this.changeValue(e, 'dob')}/>
          </div>
        </div>
        <input type="text" placeholder="City"  value={this.state.city} onChange={e => this.changeValue(e, 'city')}/>
        <input type="email" placeholder="Email" value={this.state.email} onChange={e => this.changeValue(e, 'email')} />
        <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.changeValue(e, 'password')}/>
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>;
  }
}
