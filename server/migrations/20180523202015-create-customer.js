module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelise.UUIDV4
      },
      customerNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      customerName: {
        allowNull: true,
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
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Customers'),
};
