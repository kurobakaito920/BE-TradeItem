'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.News,{
        foreignKey: "newsID",
        targetKey: "id",
      });
      this.belongsTo(models.Users,{
        foreignKey: "userID",
        targetKey: "id",
      });
    }
  }
  Rates.init({
    newsID: DataTypes.STRING,
    userID: DataTypes.STRING,
    pointRate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rates',
  });
  return Rates;
};