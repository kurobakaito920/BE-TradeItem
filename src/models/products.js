'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categories, {
        foreignKey: "categoryID",
        targetKey: "id",
      });
      this.belongsTo(models.subCategories,{
        foreignKey: "subCategoryID",
        targetKey: "id",
      });
      this.hasMany(models.productNews, {
        foreignKey: "productID",
      });
    }
  }
  Products.init({
    subCategoryID: DataTypes.STRING,
    categoryID: DataTypes.STRING,
    nameProduct: DataTypes.STRING,
    imageProduct: DataTypes.STRING,
    pricesProduct: DataTypes.STRING,
    status: DataTypes.STRING,
    imgSlide1: DataTypes.STRING,
    imgSlide2: DataTypes.STRING,
    imgSlide3: DataTypes.STRING,
    imgSlide4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};