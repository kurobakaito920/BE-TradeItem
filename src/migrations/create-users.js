'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      newsFavoriteID: {
        type: Sequelize.INTEGER,
      },
      productNewsID: {
        type: Sequelize.INTEGER,
      },
      nameUser: {
        type: Sequelize.STRING
      },
      emailUser: {
        type: Sequelize.STRING
      },
      passwordUser: {
        type: Sequelize.STRING
      },
      phoneUser: {
        type: Sequelize.STRING
      },
      avatarUser: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};