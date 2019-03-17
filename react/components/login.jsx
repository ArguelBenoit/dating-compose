import React from 'react';
import axios from 'axios';
import config from '../config.js';
import emailValidation from '../utils/emailValidation';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      login: null,
      password: null,
      showPassword: false
    };
  }
  changeValue(event, name) {
    let { value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { login, password } = this.state;
    let postObj = {
      [emailValidation(login) ? 'email' : 'username']: login,
      password
    };
    axios
      .post(config.apiUrl + '/api/users/authenticate', postObj)
      .then(res => console.log(res));
  }
  render() {
    const { showPassword } = this.state;
    return <div>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Email or username" onChange={e => this.changeValue(e, 'login')} />
        <input type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={e => this.changeValue(e, 'password')} />
          {!showPassword ?
            <FaEyeSlash
              className="eye-icon"
              onClick={() => this.setState({showPassword: !showPassword})}
            /> :
            <FaEye
              className="eye-icon"
              onClick={() => this.setState({showPassword: !showPassword})}
            />
          }
        <input type="submit" value="Submit" className="button-primary" />
      </form>
    </div>;
  }
}
