import React from 'react';
import ReactDOM from 'react-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import config from '../config.js';
import axios from 'axios';
import moment from 'moment';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBorderError = this.toggleBorderError.bind(this);
    this.togglePlaceholderError = this.togglePlaceholderError.bind(this);
    this.state = {
      username: null,
      sexe: null,
      birthday: null,
      email: null,
      password: null,
      showPassword: false,
      ['placeholder-username']: 'Username (only alpha-numeric characters)',
      ['placeholder-email']: 'Email (not showed)'
    };
  }
  changeValue(event, name) {
    let { value } = event.target;
    this.setState({
      [name]: value
    });
    this.toggleBorderError(name, false);
    switch (name) {
      case 'username':
        this.setState({['placeholder-username']: 'Username'});
        break;
      case 'email':
        this.setState({['placeholder-email']: 'Email (not showed)'});
        break;
      // case 'birthday':
          // var str = this.state.birthday
          //   .replace(' ', '/')
          //   .replace('.', '/')
          //   .replace('-', '/');
      //  replace - . ans space by /
      //  break;
      //  controled component
      default:
    }
  }
  toggleBorderError(ref, bool) {
    if (bool) {
      ReactDOM
        .findDOMNode(this.refs[ref])
        .classList
        .add('border-error');
    } else {
      ReactDOM
        .findDOMNode(this.refs[ref])
        .classList
        .remove('border-error');
    }
  }
  togglePlaceholderError(ref) {
    this.setState({
      [ref]: null,
      ['placeholder-' + ref]: this.refs[ref].value + ' is already taken...'
    });
    this.refs[ref].value = null;
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username, sexe, birthday, email, password } = this.state;
    const postObj = {
      birthday: moment(birthday, 'DD/MM/YYYY').toDate(),
      username,
      sexe,
      email,
      password
    };
    Object.keys(postObj).forEach( key => {
      this.toggleBorderError(key, false);
    });
    axios
      .post(config.apiUrl + '/api/users', postObj)
      .then(res => console.log(res))
      .catch(err => {
        if (err.response.data.message) {
          switch (err.response.data.message) {
            case 'Username taken':
              this.toggleBorderError('username', true);
              this.togglePlaceholderError('username');
              break;
            case 'Email taken':
              this.toggleBorderError('email', true);
              this.togglePlaceholderError('email');
              break;
            default:
          }
        }
        if (
          err.response.data.validation &&
          err.response.data.validation.keys
        ) {
          err.response.data.validation.keys.forEach(key => {
            this.toggleBorderError(key, true);
          });
        }
      });
  }
  render () {
    const { showPassword } = this.state;
    return <div className="subscribe">
      <h1>Subscribe</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref="username"
          placeholder={this.state['placeholder-username']}
          onChange={e => this.changeValue(e, 'username')}
        />
        <input
          type="email"
          ref="email"
          placeholder={this.state['placeholder-email']}
          onChange={e => this.changeValue(e, 'email')}
        />
        <div className="row">
          <div className="columns four">
            <select
              className="u-full-width"
              ref="sexe"
              onChange={e => this.changeValue(e, 'sexe')}
            >
              <option value="">Sexe</option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="columns eight">
            <input
              type="text"
              ref="birthday"
              placeholder="Date of birth (dd/mm/yyyy)"
              onChange={e => this.changeValue(e, 'birthday')}
            />
          </div>
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          ref="password"
          placeholder="Password"
          onChange={e => this.changeValue(e, 'password')}
        />
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
        <input
          className="button-primary"
          type="submit"
          value="Submit"
        />
      </form>
    </div>;
  }
}
