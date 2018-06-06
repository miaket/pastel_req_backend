module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('RequestCustomers',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      requestId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Requests',
          key: 'id',
          as: 'requestId'
        }
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id',
          as: 'customerId'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }
  )},
down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('RequestCustomers')
  }
};