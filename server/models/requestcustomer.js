module.exports = (sequelize, DataTypes) => {
  const Requestcustomer = sequelize.define('Requestcustomer', {
    dateFrom: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateTo:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });
  Requestcustomer.associate = (models) => {
    Requestcustomer.belongsTo(models.Request, {
      foreignKey: 'requestId',
    });
  };

  return Requestcustomer;
};
