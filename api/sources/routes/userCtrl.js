const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const models


// routes
module.export = {
  //
  register: (req, res) => {
    let { email, password, name, lastName, age, sexe, city, country } = req.body;
    if ( !email || !password || !name || !lastName || !age || !sexe || !city || !country ) {
      return res.status(400).json({ 'error': 'missing parameters' });
    } else {
      return res.status(200).json({ 'error': 'missing parameters' });
    }
    // todo vérifier la validité du password et autre paramètre longueure type etc...
  },
  //
  login: (req, res) => {
    // todo
  }
};
