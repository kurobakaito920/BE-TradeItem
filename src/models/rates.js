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
        foreignKey: 'newsID',
        targetKey: 'id',
      });
      this.belongsTo(models.Users,{
        foreignKey: 'usersID',
        targetKey: 'id',
      });
    }
  }
  Rates.init({
    valueRate: DataTypes.INTEGER(5),
    timeRate: DataTypes.STRING,
    newsID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rates',
  });
  return Rates;
};