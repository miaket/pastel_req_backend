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

  // Customer.associate = (models) => {
  //   Customer.hasMany(models.Request, {
  //     foreignKey: 'customerId',
  //     as: 'requests',
  //   });
  // };
  return Customer;
};
