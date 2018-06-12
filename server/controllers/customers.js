const Customer = require('../models').Customer;

const getCustomer = function(regNumberId){
  return Customer
    .findOne({
      where: {regNumber: regNumberId},
      attributes: ['id','regNumber','name'],
    })
      .then(Customer => Customer)
      .catch(error => error);
}

const createCustomer = function(req) {
  const { regNumber, name } = req.body
  return Customer
    .create({ regNumber, name})
    .then(customer => {
      return customer;
    })
    .catch(error => res.status(400).send(error))
}

module.exports = {
  getCustomer(req, res) {
    const { regNumber } = req.params;
    return getCustomer(regNumber).then(Customer => {
      if (Customer){
        return res.status(200).send(Customer);
      }
    })
  },
  validCustomer(req, res){
    const { regNumber, name } = req.body;
    return getCustomer(regNumber).then(Customer => {
      if (Customer){
        return res.status(200).send(Customer);
      } else{
        return createCustomer(req)
          .then(Customer => res.status(400).send(Customer))
          .catch(error => res.status(400).send(error))
      }
    })
  }
};
