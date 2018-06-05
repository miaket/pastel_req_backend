module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Requestcustomers',{
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
          key: 'id'
        }
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }
  )},
down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Requestcustomers')
  }
};