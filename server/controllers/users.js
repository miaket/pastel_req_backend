const User = require('../models').User;
const Request = require('../models').Request;
const encryptor = require('../utils').encryptor;
const decryptor = require('../utils').decryptor;
const key = process.env.KEY;

module.exports = {
  create(req, res) {
    let encrypPass = encryptor(req.body.password, key);
    return User
    .create({
        userName: req.body.userName,
        password: encrypPass,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Request,
          as: 'requests',
        }],
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
};
