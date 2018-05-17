module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      formType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ec: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      requestId: {
        type:Sequelize.INTEGER,
        references: {
          model: 'Requests',
          key: 'id',
          as: 'requestId',
        }
      }
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Forms'),
};
