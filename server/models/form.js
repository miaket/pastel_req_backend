module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    formType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ec: {
      type: DataTypes.STRING,
    },
  });

  Form.associate = (models) => {
    Form.belongsTo(models.Request, {
      foreignKey: 'requestId',
    });
  };

  return Form;
};
