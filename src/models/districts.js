'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cities,{
        foreignKey:'cityID',
        targetKey: 'id'
      });
      this.hasMany(models.Wards,{
        foreignKey: 'districtID'
      });
    }
  }
  Districts.init({
    cityID: DataTypes.INTEGER,
    nameDistrict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Districts',
  });
  return Districts;
};