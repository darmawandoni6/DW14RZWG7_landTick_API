"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      ktp: DataTypes.STRING,
      nama: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      jenisKelamin: DataTypes.STRING,
      phone: DataTypes.STRING,
      alamat: DataTypes.STRING,
    },
    {}
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
