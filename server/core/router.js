const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const authController = require('../controllers').auth;
const usersController = require('../controllers').users;
const requestsController = require('../controllers').requests;
const requestcustomerController = require('../controllers').requestcustomer;

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'ello!'});
});

router.post('/signin', authController.signin);

router.post('/user/create', usersController.create);
router.get('/user/all', usersController.list);

router.post('/user/:userId/reqcreate', requestsController.create);
router.get('/req/all', requestsController.list);
router.get('/req/byuser:userId', requestsController.listFromUser);

// router.post('/customerinfo', requestcustomerController.create);
// router.get('/customerinfo/all', requestcustomerController.list);
// router.get('/customerinfo/byreq:requestId', requestcustomerController.listFromReq);

module.exports = router;
