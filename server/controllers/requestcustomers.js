const User = require('../models').User;
const Request = require('../models').Request;
const Requestcustomer = require('../models').Requestcustomer;

module.exports = {
  create(req, res) {
    return Requestcustomer
      .create({
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        customerId: req.body.customerId,
        requestId: req.body.requestId
      })
      .then(request => res.status(201).send(request))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      })
      },
  list(req, res) {
    return Requestcustomer
      .findAll()
      .then(requestcustomer => res.status(200).send(requestcustomer))
      .catch(error => res.status(400).send(error));
  },
  listFromReq(req, res) {
    return Request
      .findById(req.params.requestId, {
        include: [{
          model: Requestcustomer,
          as: 'requestcustomers',
        }],
      })
      .then(request => {
        if (!request) {
          return res.status(404).send({
            message: 'req Not Found',
          });
        }
        return res.status(200).send(request);
      })
      .catch(error => res.status(400).send(error));
  },
};