const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;
const Customer = require('../models').Customer;
const controlCustomers = require('./customers');

//getArrayCustomer <- send array of customer's regNumbers
module.exports = {
  create(req, res) {
    const { message, urgencyLevel, complete, regNumber } = req.body
    const { userId } = req.params
    controlCustomers.getArrayCustomer(regNumber)
      .then(regNumbers =>{
        return Request
          .create({ message, urgencyLevel, complete, userId })
            .then(newRequest => newRequest.addCustomers(regNumbers))
              .then(user => res.status(200).send(user))
              .catch(error => res.status(400).send(error))
            .catch(error => res.status(400).send(error))
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  customerlink(req,res){
    console.log('dear ol dad')
    console.log (req.body)
    return controlCustomers.validCustomer(req)
      .then(Customer => {
        console.log ('michel , vai toma noseu cu')
        console.log(Customer)
        return res.status(200).send(Customer)
      })
      .catch(error => res.status(400).send(error));
  },
  // RequestCustomer(req, res) {
  //   return Request.findOne({ where: { id: req.params.id } })
  //     .then(function(request) {
  //       return request.addCustomer(req.body.customersId);
  //     })
  //     .then(user => res.status(200).send(user))
  //     .catch(error => {
  //       console.log(error)
  //       return res.status(400).send(error);
  //     })
  // },
  list(req, res) {
    return Request
      .findAll({
        include:[{
          model: Customer,
          as: 'customers'
        }]
      })
      .then(request => res.status(200).send(request))
      .catch(error => res.status(400).send(error));
  },
  listFromUser(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Request,
          as: 'requests',
          include: ['customers']
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
  requestById(req, res) {
    return Request.findOne({ where: { id: req.params.id }, include: ['customers'] })
      .then(user => res.status(200).send(user))
      .catch(error => {
        console.log(error)
        return res.status(400).send(error);
      })
  },
}