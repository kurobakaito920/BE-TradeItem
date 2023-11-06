'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newsFavorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.News,{
        foreignKey: 'newsID',
        targetKey: 'id'
      });
      this.belongsTo(models.Users,{
        foreignKey: 'userID',
        targetKey: 'id'
      });
    }
  }
  newsFavorites.init({
    newsID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'newsFavorites',
  });
  return newsFavorites;
};