'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productNews extends Model {
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
      this.belongsTo(models.Products,{
        foreignKey: "productID",
        targetKey: "id",
      });
      this.hasMany(models.Users,{
        foreignKey: "productNewsID",
      });
    }
  }
  productNews.init({
    productID: DataTypes.STRING,
    newsID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productNews',
  });
  return productNews;
};