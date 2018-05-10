const User = require('../models').User;
const Request = require('../models').Request;

module.exports = {
  create(req, res) {
    return Request
      .create({
        content: req.body.content,
        userId: req.params.userId,
      })
      .then(request => res.status(201).send(request))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Request
      .findAll()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
};