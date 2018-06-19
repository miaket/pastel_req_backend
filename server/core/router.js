const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const authController = require('../controllers').auth;
const usersController = require('../controllers').users;
const requestsController = require('../controllers').requests;
const customersController = require('../controllers').customers;
// const requestcustomersController = require('../controllers').requestcustomers;
const myRequestsController = require('../controllers').myRequests;

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'ello!'});
});

router.post('/signin', authController.signin);

router.post('/user/create', usersController.create);
router.get('/user/all', usersController.list);

//router.post('/customer/validatecreate', customersController.validCustomer);
//router.get('/customer/:regNumber', customersController.getCustomer);
//^ using get array customers intead ^

// router.post('/findcreate', customersController.findOrCreate);
router.post('/req/:userId/reqcreate', requestsController.create);
router.post('/customerlink', requestsController.customerlink);
// router.put('/req/customer/:id', requestsController.RequestCustomer);
// router.post('/getarraycustomers', customersController.getArrayCustomer);
router.get('/req/myrequests/:userId', myRequestsController.myRequests);

// router.post('/requestcustomer/create', requestcustomersController.create);
// router.get('/requestcustomer/all', requestcustomersController.list);
// router.get('/customerinfo/byreq:requestId', requestcustomerController.listFromReq);

module.exports = router;
