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
      complete:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      message:{
        allowNull:true,
        type:Sequelize.STRING
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
