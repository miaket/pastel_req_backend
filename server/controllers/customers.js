const Customer = require('../models').Customer;

module.exports = {
  create(req, res) {
    // let encrypPass = encryptor(req.body.password, key);
    return Customer
      .create({
          customerNumber: req.body.customerNumber,
          customerName: req.body.customerName,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Customer
      .findAll()
      .then(user => res.status(200).send(Customer))
      .catch(error => res.status(400).send(error));
  }
};