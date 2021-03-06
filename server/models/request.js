module.exports = (sequelize, DataTypes) => {
  let Request = sequelize.define('Request', {
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
    Request.belongsToMany(models.Customer,{
      through:'RequestCustomers',
      as: 'customers',
    });
  };
  return Request;
};
