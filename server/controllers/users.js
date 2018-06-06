const User = require('../models').User;
const Request = require('../models').Request;
const Requestcustomer = require('../models').Requestcustomer;
const Customer = require('../models').Customer;
const encryptor = require('../utils').encryptor;
const key = process.env.KEY;

module.exports = {
  create(req, res) {
    let encrypPass = encryptor(req.body.password, key);
    return User
      .create({
          username: req.body.username,
          password: encryptor(req.body.password, key),
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
      .catch(error => {
        console.log(error)
        return res.status(400).send(error);
      })
      //.catch(error => res.status(400).send(error));
  }
};
