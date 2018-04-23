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

module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Request.associate = (models) => {
    Request.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Request;
};