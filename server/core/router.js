const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const usersController = require('../controllers/users');
const requestsController = require('../controllers/requests');

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'ello!'});
});

router.post('/user/create', usersController.create);
router.get('/user', usersController.list);

router.post('/user/:userId/reqcreate', requestsController.create);
router.get('/req', requestsController.list);

module.exports = router;
