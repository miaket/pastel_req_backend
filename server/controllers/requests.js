const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;

module.exports = {
  create(req, res) {
    return Request
      .create({
        content: req.body.content,
        urgencyLevel: req.body.urgencyLevel,
        userId: req.params.userId,
      })
      .then(request => res.status(201).send(request))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Request
      .findAll()
      .then(request => res.status(200).send(request))
      .catch(error => res.status(400).send(error));
  },
  listFromUser(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Request,
          as: 'requests',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
};