module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customerNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    customerName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });
  Customer.associate = (models) => {
    Customer.hasMany(models.Requestcustomer,{
      foreignKey:'customerId',
      as: 'requestcustomers',
    });
  };
  return Customer;
};
