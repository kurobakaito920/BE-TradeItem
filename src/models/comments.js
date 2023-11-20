'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users,{
        foreignKey: 'userID',
        targetKey: 'id'
      });
      this.belongsTo(models.News,{
        foreignKey: 'newsID',
        targetKey: 'id'
      });
    }
  }
  Comments.init({
    userID: DataTypes.INTEGER,
    newsID: DataTypes.INTEGER,
    contentComment: DataTypes.STRING,
    timeComment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};