'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  });

  User.associate = (models) => {
    User.hasMany(models.Request, {
      foregnKey: 'requestId',
      as: 'requests',
    });
  };
  return User;
};
