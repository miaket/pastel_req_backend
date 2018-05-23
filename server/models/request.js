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
    });
  };

  Request.associate = (models) => {
    Request.hasMany(models.Form,{
      foreignKey:'requestId',
      as: 'forms',
    });
  };
  
  return Request;
};
