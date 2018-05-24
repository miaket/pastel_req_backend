module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Requestcustomers', {
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
      },
      customerId:{
        type:Sequelize.UUID,
        references: {
          model: 'Customers',
          key: 'id',
          as: 'customerId',
        }
      }
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Requestcustomers'),
};
