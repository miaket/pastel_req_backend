/**
 * Middleware to restrict authentication
 * @module controllers/authenticationMiddleware
 * 
*/

const decryptor = require('../utils/decryptor');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const database = require('../models/database');

/**
 * User's cookie encrypt and decrypt key
 * @readonly
 * @const {string}
 */
const tokenKey = process.env.TOKEN_ENCRYPTATION;

/**
 * Check if user`s token is valid
 *
 * @param {string} req.headers.API_KEY - User`s API Key
 * @return {callback} - Calls the API
 * @throws {json} - Throws a message with the error info
*/
module.exports = (req, res, next) => {

  if (!validator.isValidCookie(req.cookies)) 
    return res.status(401).json({
      msg: constants.messages.error.INVALID_LOGIN
    });
  
  let token = decryptor(req.cookies.session, tokenKey);
  if (!token)
    return res.status(401).json({
      msg: constants.messages.error.INVALID_LOGIN
    });

  database.user.findById(token.id)
    .then(user => {
      if (!user) 
        return res.status(401).json({
          msg: constants.messages.error.INVALID_LOGIN
        });

      req.userInfo = user;
      return next();
    })
    .catch(err => {
      return res.status(500).json({
        msg: constants.messages.error.UNEXPECTED
      });
    });
};