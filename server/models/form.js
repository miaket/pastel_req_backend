module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Form', {
    formType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ec: {
      type: DataTypes.STRING,
    },
  });

  Request.associate = (models) => {
    Request.belongsTo(models.Request, {
      foreignKey: 'requestId',
    });
  };

  return Request;
};
