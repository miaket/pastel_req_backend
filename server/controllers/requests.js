
const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;

module.exports = {
  create(req, res) {
    return Request
      .create({
        message: req.body.message,
        urgencyLevel: req.body.urgencyLevel,
        complete: req.body.complete,
        userId: req.params.userId
      })
      .then(request => res.status(201).send(request))
      .catch(error => {
        console.log (error)
        return res.status(400).send(error);
      })
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
  testReturnApi(req, res) {
    let objRequest;
    objRequest = [{
      requestId: 10,
      urgencyLevel: 4,
      createdAt: "2018-05-26T21:27:11.385Z",
      customers:[{
        name: "Rocket League ltda",
        number: "1029384756"
      },{
        name: "Freezing laser inc",
        number: "9987654321"
      }]
    },{
      requestId: 12,
      urgencyLevel: 1,
      createdAt: "2018-06-04T21:27:11.385Z",
      customers:[{
        name: "Paper Berry",
        number: "1112223334"
      }]
    }]
    return res.status(200).send(objRequest);
  },

  listRequest(req, res) {
    return Request.findOne({ where: { id: req.params.id }, include: ['customers'] })
      .then(user => res.status(200).send(user))
      .catch(error => {
        console.log(error)
        return res.status(400).send(error);
      })
  },
  putRequest(req, res) {
    return Request.findOne({ where: { id: req.params.id } })
      .then(function(request) {
        return request.addProduct(req.body.productId);
      })
      .then(handleResponse(res), handleError(res));
  }
}