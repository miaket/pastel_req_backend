const User = require('../models').User;
const Request = require('../models').Request;
const encryptor = require('../utils').encryptor;
const decryptor = require('../utils').decryptor;
const constants = require('../utils').constants;
const key = process.env.KEY;

module.exports = {
  signin(req, res){
    return User
      .findOne({
        where: {
          username:req.body.username
        }
      })
      .then(User => {
        if (!User) 
          return res.status(401).json({
            msg: constants.messages.error.INVALID_LOGIN
          });
        if (decryptor(User.password, key) == req.body.password){
          console.log('pass does match')
          res.status(200).send(User)
        } else{
          res.status(401).json({
            msg: constants.messages.error.INVALID_PASS
          })
        }
      })
      .catch(error => res.status(400).send(error));
  }
};
