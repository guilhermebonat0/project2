'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  login.init({
    id_usuario: DataTypes.INTEGER,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'login',
  });
  return login;
};