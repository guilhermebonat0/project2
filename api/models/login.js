
'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('logins', {
    id_usuario: DataTypes.INTEGER,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    usuario: DataTypes.STRING
  }, {});
  login.associate = function(models) {
    // associations can be defined here
  };
  return login;
};