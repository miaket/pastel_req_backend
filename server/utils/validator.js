const constants = require('./constants');

const isValidString = stringToValidate => {
  try {
    return stringToValidate instanceof String && stringToValidate.trim().length > 0;
  } catch (err) {
    //logger.error(err);
    return false;
  }
};

const isValidCookie = cookie => {
  try {
    return isValidString(cookie);
  } catch (err) {
    //logger.error(err);
    return false;
  }
};

module.exports = {
  isValidString: isValidString,
  isValidCookie: isValidCookie
};
