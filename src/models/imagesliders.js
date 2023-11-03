'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageSliders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imageSliders.init({
    imageSlider: DataTypes.STRING,
    imageSlider2: DataTypes.STRING,
    imageSlider3: DataTypes.STRING,
    imageSlider4: DataTypes.STRING,
    imageSlider5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'imageSliders',
  });
  return imageSliders;
};