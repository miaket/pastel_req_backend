const User = require('../models').User;
const Request = require('../models').Request;

module.exports = {
  create(req, res) {
    console.log(req.body);
    return User
    .create({
        userName: req.body.userName,
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

