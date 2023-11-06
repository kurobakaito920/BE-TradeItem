'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users,{
        foreignKey: 'userID',
        targetKey: 'id',
      });
      this.belongsTo(models.Permissions,{
        foreignKey: 'permissionID',
        targetKey: 'id'
      });
    }
  }
  userPermissions.init({
    permissionID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userPermissions',
  });
  return userPermissions;
};