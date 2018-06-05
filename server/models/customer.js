module.exports = (sequelize, DataTypes) => {
  let Customer = sequelize.define('Customer', {
    regNumber: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });
  
  Customer.associate = (models) => {
    Customer.belongsToMany(models.Request,{
      through:'requestcustomer',
      as: 'requests',
    });
  };
  return Customer;
};
