const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;
const Customer = require('../models').Customer;

const listFromUser = function(userId) {
  return User
  .findById(userId, {
    include: [{
      model: Request,
      as: 'requests',
      attributes: [
        'id',
        'complete',
        'urgencyLevel',
        'message',
        'createdAt'
      ],
      include: [{
        model: Customer,
        as: 'customers',
        attributes: [
          'regNumber',
          'name'
        ],
        through:{
          attributes:[]
        },
      }]
    }],
  })
    .then(user => {
      if (!user) {
        return 'user Not Found';
      }
      return user;
    })
    .catch(error => error);
}
  
module.exports = {
  myRequests(req, res) {
    let objRequest = [];
    let uglyRequest;

    uglyRequest = listFromUser(req.params.userId)
      .then(uglyRequest =>{
        for (let item in uglyRequest.dataValues.requests) {
          objRequest.push(uglyRequest.dataValues.requests[item].dataValues)
        }
        return res.status(200).send(objRequest);
      })
    .catch(error => error);
  },
}
