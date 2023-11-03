'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cities,{
        foreignKey: "cityID",
        targetKey: "id",
      });
      this.hasMany(models.News,{
        foreignKey: "locationID",
      });
    }
  }
  Locations.init({
    cityID: DataTypes.STRING,
    nameStreet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};