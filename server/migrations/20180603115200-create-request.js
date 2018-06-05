module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      urgencyLevel:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId:{
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Requests'),
};
