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
const requestcustomersController = require('../controllers').requestcustomers;
//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'ello!'});
});

router.post('/signin', authController.signin);

router.post('/user/create', usersController.create);
router.get('/user/all', usersController.list);

router.post('/customer/create', customersController.create);
router.get('/customer/all', customersController.list);

router.post('/req/customer/:id', requestsController.RequestCustomer);
router.post('/req/:userId/reqcreate', requestsController.create);
router.get('/req/all', requestsController.list);
router.get('/req/byuser/:userId', requestsController.listFromUser);
router.get('/req/myrequests', requestsController.testReturnApi) //test

router.get('/test/:id', requestsController.listRequest);

router.post('/requestcustomer/create', requestcustomersController.create);
router.get('/requestcustomer/all', requestcustomersController.list);
// router.get('/customerinfo/byreq:requestId', requestcustomerController.listFromReq);

module.exports = router;
