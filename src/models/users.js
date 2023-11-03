'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.productNews,{
        foreignKey: "productNewsID",
        targetKey: "id",
      });
      this.belongsTo(models.newsFavorites,{
        foreignKey: "newsFavoriteID",
        targetKey: "id",
      });
      this.hasMany(models.Rates,{
        foreignKey: "userID",
      });
      this.hasMany(models.Comments,{
        foreignKey: "userID",
      });
    }
  }
  Users.init({
    newsFavoriteID: DataTypes.STRING,
    productNewsID: DataTypes.STRING,
    nameUser: DataTypes.STRING,
    emailUser: DataTypes.STRING,
    passwordUser: DataTypes.STRING,
    phoneUser: DataTypes.STRING,
    avatarUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};