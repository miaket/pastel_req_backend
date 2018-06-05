module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Frinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dateFrom: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dateTo:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      frType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      requestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Requests',
          key: 'id',
          as: 'requestId',
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Frinfos'),
};
