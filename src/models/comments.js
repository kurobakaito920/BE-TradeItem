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
        foreignKey: "userID",
        targetKey: "id",
      });
      this.hasMany(models.News,{
        foreignKey: "commentID",
      });
    }
  }
  Comments.init({
    userID: DataTypes.STRING,
    content: DataTypes.STRING,
    timeComment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};