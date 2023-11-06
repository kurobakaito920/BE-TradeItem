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
      this.hasMany(models.productNews,{
        foreignKey: 'userID'
      });
      this.hasMany(models.newsFavorites,{
        foreignKey: 'userID'
      });
      this.hasMany(models.Comments,{
        foreignKey: 'userID'
      });
      this.hasMany(models.Orders,{
        foreignKey: 'userID'
      });
      this.hasMany(models.userPermissions,{
        foreignKey: 'userID'
      });
    }
  }
  Users.init({
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