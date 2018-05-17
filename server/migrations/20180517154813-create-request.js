module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      }
      // formId: {
      //   type:Sequelize.INTEGER,
      //   references: {
      //     model: 'Forms',
      //     key: 'id',
      //     as: 'formId',
      //   }
      // }
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Requests'),
};
