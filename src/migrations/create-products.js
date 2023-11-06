'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryID: {
        type: Sequelize.INTEGER
      },
      subCategoryID: {
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      imgProduct: {
        type: Sequelize.STRING
      },
      pricesProduct: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      imgSlide1: {
        type: Sequelize.STRING
      },
      imgSlide2: {
        type: Sequelize.STRING
      },
      imgSlide3: {
        type: Sequelize.STRING
      },
      imgSlide4: {
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
    await queryInterface.dropTable('Products');
  }
};