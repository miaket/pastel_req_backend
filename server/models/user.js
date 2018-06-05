module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Request, {
      foreignKey: 'userId',
      as: 'requests',
    });
  };
  return User;
};
