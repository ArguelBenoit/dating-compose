import React from 'react';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.changeValueEmail = this.changeValueEmail.bind(this);
    this.changeValueLastName = this.changeValueLastName.bind(this);
    this.changeValueFirstName = this.changeValueFirstName.bind(this);
    this.changeValuePassword = this.changeValuePassword.bind(this);
    this.changeValueSexe = this.changeValueSexe.bind(this);
    this.changeValueDob = this.changeValueDob.bind(this);
    this.changeValueCity = this.changeValueCity.bind(this);
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
  changeValueEmail(event) {
    let { value } = event.target;
    this.setState({
      email: value
    });
  }
  changeValueLastName(event) {
    let { value } = event.target;
    this.setState({
      lastName: value
    });
  }
  changeValueFirstName(event) {
    let { value } = event.target;
    this.setState({
      firstName: value
    });
  }
  changeValuePassword(event) {
    let { value } = event.target;
    this.setState({
      password: value
    });
  }
  changeValueSexe(event) {
    let { value } = event.target;
    this.setState({
      sexe: value
    });
  }
  changeValueDob(event) {
    let { value } = event.target;
    this.setState({
      dob: value
    });
  }
  changeValueCity(event) {
    let { value } = event.target;
    this.setState({
      city: value
    });
  }
  render () {
    return <div className="subscribe">
      <h1>Subscribe</h1>
      <form action="onSubmit">
        <div className="row">
          <div className="columns six">
            <input type="text" placeholder="Last name" value={this.state.lastName} onChange={this.changeValueLastName} />
          </div>
          <div className="columns six">
            <input type="text" placeholder="First name" value={this.state.firstName} onChange={this.changeValueFirstName} />
          </div>
        </div>
        <div className="row">
          <div className="columns six">
            <select value={this.state.sexe} onChange={this.changeValueSexe}>
              <option value="Man"/>
              <option value="Woman"/>
              <option value="Other"/>
            </select>
          </div>
          <div className="columns six">
            <input type="text" placeholder="Date of birth" value={this.state.dob} onChange={this.changeValueDob}/>
          </div>
        </div>
        <input type="text" placeholder="City"  value={this.state.city} onChange={this.changeValueCity}/>
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.changeValueEmail} />
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.changeValuePassword} />
        <input className="button-primary" type="submit" value="Submit" />
      </form>
    </div>;
  }
}
