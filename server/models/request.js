'use strict';
module.exports = (sequelize, DataTypes) => {
  var Request = sequelize.define('Request', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};