const Customer = require('../models').Customer;

const getCustomer = function(regNumberId){
  console.log('local get cust')
  console.log(regNumberId)
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
  getArrayCustomer(req, res){
    regNumbers = req.body.regNumber
    console.log(regNumbers)
    return Customer.findAll({ where: { regNumber: regNumbers } })
      .then(customers => {
        console.log(customers)
        res.status(201).send(customers)
      })
    .catch(error => res.status(400).send(error));
  },
  getCustomer(regNumber) {
    console.log('inside getcustomer')
    console.log(req.body)
    //const { regNumber } = req.body;
    return getCustomer(regNumber).then(Customer => {
      if (Customer){
        return res.status(200).send(Customer);
      } else {
        return res.status(200).send({
          msg: "new customer"
        });
      }
    })
  },
  validCustomer(req){
    console.log('inside customesr')
    console.log(req.body)
    const { regNumber, name } = req.body;
    return getCustomer(regNumber).then(Customer => {
      console.log(Customer);
      if (Customer){
        return (Customer);
      } else {
        return createCustomer(req)
          .then(Customer => (Customer))
          .catch(error => (error))
      }
    })
  },
  findOrCreate(req){
    const { regNumber, name} = req.body
    return Customer
      .findOrCreate({where: {regNumber: regNumber}, defaults: {name: name}})
      // .spread((Customer, created) => {
      //   Customer.get({plain: true})}
      // )
      .then(Customer => res.status(200).send(Customer))
      .catch(error => res.status(400).send(error))
  }
};
