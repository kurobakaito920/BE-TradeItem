'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imageSliders', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      imageSlider: {
        type: Sequelize.STRING
      },
      imageSlider2: {
        type: Sequelize.STRING
      },
      imageSlider3: {
        type: Sequelize.STRING
      },
      imageSlider4: {
        type: Sequelize.STRING
      },
      imageSlider5: {
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
    await queryInterface.dropTable('imageSliders');
  }
};