const Customer = require('../models').Customer;

module.exports = {
  create(req, res) {
    return Customer
      .create({
        regNumber: req.body.regNumber,
        name: req.body.name,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Customer
      .findAll()
      .then(Customer => res.status(200).send(Customer))
      .catch(error => res.status(400).send(error));
  }
};
