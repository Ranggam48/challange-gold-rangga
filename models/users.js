'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    // id: {
    //   field: 'id',
    //   name: 'id',
    //   type: DataTypes.INTEGER,
    //   primaryKey: true
    // },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      name: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      name: 'updated_at',
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};