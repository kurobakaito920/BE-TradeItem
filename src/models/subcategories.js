'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategories extends Model {
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
      this.hasMany(models.Products, {
        foreignKey: "subCategoryID",
      });
    }
  }
  subCategories.init({
    categoryID: DataTypes.STRING,
    nameSubCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategories',
  });
  return subCategories;
};