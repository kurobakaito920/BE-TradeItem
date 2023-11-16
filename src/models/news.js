'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Locations,{
        foreignKey: 'locationID',
        targetKey: 'id'
      });
      this.hasMany(models.Comments,{
        foreignKey: 'newsID',
      })
      this.hasMany(models.newsFavorites,{
        foreignKey: 'newsID',
      });
      this.hasMany(models.productNews,{
        foreignKey: 'newsID',
      });
      this.hasMany(models.Rates,{
        foreignKey: 'newsID',
      })
    }
  }
  News.init({
    locationID: DataTypes.INTEGER,
    commentID: DataTypes.INTEGER,
    description: DataTypes.STRING,
    timeUpload: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};