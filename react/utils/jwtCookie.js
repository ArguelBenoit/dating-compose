
let setJwtCookie = jwt => {
  document.cookie = `jwt=${jwt} Secure; HttpOnly`;
  document.cookies.set({
    name: 'authDating', // ˆˆ
    value: jwt,
    httpOnly: true,
    secure: true
  });
};

let doYouHaveAJwtCookie = () => {
  return document.cookies.get({name: 'authDating'});
};

let destroyJwtCookie = () => {
  document.cookies.remove({name: 'authDating'});
};

export {
    setJwtCookie,
    doYouHaveAJwtCookie,
    destroyJwtCookie
};
