const Customer = require('../models').Customer;
const Sequelize = require('sequelize');

const getCustomer = function(regNumberId){
  const Op = Sequelize.Op;
  console.log('local get cust')
  console.log(regNumberId)
  return Customer
    .findAll({
      where: {
        regNumber: {
          [Op.or]:regNumberId
        }
      },
      attributes: ['id','regNumber','name'],
    })
      .then(Customer => {
        console.log(Customer)
        return Customer
      })
      .catch(error => {
        console.log(error)
        return error
      });
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

const validateCustomer = function(regNumber){
  console.log('inside customesr')
  return getCustomer(regNumber).then(Customer => {
    console.log(Customer);
    if (Customer){
      return Customer;
    } else {
      return createCustomer(req)
        .then(Customer => Customer)
        .catch(error => error)
    }
  })
}

module.exports = {
  getArrayCustomer(req, res){
    regNumbers = req.body.regNumber
    console.log(regNumbers)
    
    //todo: Call validateCustomer to check if every customer entry exist

    return Customer.findAll({
      where: { regNumber: regNumbers },
      attributes: ['id','regNumber','name']
    })
      .then(customers => {
        const customerIdArr = customers.map(customer => customer.id);
        console.log(customerIdArr)
        res.status(201).send(customerIdArr)
      })
    .catch(error => res.status(400).send(error));
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
