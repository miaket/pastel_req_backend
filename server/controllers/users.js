const User = require('../models').User;

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
};