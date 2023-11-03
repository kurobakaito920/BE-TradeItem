'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Districts,{
        foreignKey: "districtID",
        targetKey: "id",
      });
    }
  }
  Wards.init({
    districtID: DataTypes.STRING,
    nameWard: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wards',
  });
  return Wards;
};