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
  return Customer;
};
