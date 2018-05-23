const User = require('../models').User;
const Request = require('../models').Request;
const Form = require('../models').Form;

module.exports = {
  create(req, res) {
    return Form
      .create({
        formType: req.body.formType,
        ec: req.body.ec,
        requestId: req.body.requestId
      })
      .then(request => res.status(201).send(request))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Form
      .findAll()
      .then(form => res.status(200).send(form))
      .catch(error => res.status(400).send(error));
  },
  listFromReq(req, res) {
    return Request
      .findById(req.params.requestId, {
        include: [{
          model: Form,
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