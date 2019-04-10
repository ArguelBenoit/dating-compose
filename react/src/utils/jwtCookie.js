// import Router from 'next/router';
import axios from 'axios';
import config from '~/config.js';


let setJwtCookieAndRedirect = (jwt, route) => {
  // document.cookie = `datjwt=${jwt}; Secure; HttpOnly`;
  document.cookie = `datjwt=${jwt};`;
  document.cookie = 'test=123;';
  if(route) {
    // Router.push(route);
  }
};


let destroyJwtCookieAndRedirect = route => {
  document.cookie = 'datjwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  if(route) {
    // Router.push(route);
  }
};


let getJwt = () => {
  let jwt = document.cookies.get({
    name: 'datjwt'
  });
  return jwt;
};


let validJwtCookieOrRedirect = route => {
  axios
    .get(config.apiUrl + '/api/ping', {'headers': { 'jwt': getJwt() }}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
      // Router.push(route);
    });
};


export {
  setJwtCookieAndRedirect,
  destroyJwtCookieAndRedirect,
  validJwtCookieOrRedirect,
  getJwt
};
