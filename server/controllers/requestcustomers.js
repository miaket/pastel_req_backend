const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;

module.exports = {
  create(req, res) {
    return Customerinfo
      .create({
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        requestId: req.body.requestId
      })
      .then(request => res.status(201).send(request))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      })
      },
  list(req, res) {
    return Customerinfo
      .findAll()
      .then(form => res.status(200).send(form))
      .catch(error => res.status(400).send(error));
  },
  listFromReq(req, res) {
    return Request
      .findById(req.params.requestId, {
        include: [{
          model: Customerinfo,
          as: 'forms',
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