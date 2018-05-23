module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    urgencyLevel:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
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
