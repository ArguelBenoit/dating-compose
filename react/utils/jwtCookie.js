import Router from 'next/router';

let setJwtCookieAndRedirect = (jwt, route) => {
  // document.cookie = `datjwt=${jwt}; Secure; HttpOnly`;
  document.cookie = `datjwt=${jwt};`;
  if(route) {
    Router.push(route);
  }
};

let destroyJwtCookieAndRedirect = route => {
  document.cookie = 'datjwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  if(route) {
    Router.push(route);
  }
};

let JwtCookieOrRedirect = () => {
  /*
    We do not monitor the validity of the token because anyway
    if the token is not valid, no data is sent from the server.
    So the mere presence of a cookie is enough to know if the
    user must be redirected to the login or not
  */
  if(document.cookie.indexOf('datjwt') > -1) {
    return;
  } else {
    Router.push('/login');
  }
};

export {
  setJwtCookieAndRedirect,
  destroyJwtCookieAndRedirect,
  JwtCookieOrRedirect
};
