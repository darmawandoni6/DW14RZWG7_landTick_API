"use strict";
module.exports = (sequelize, DataTypes) => {
  const serial_numbers = sequelize.define(
    "serial_numbers",
    {
      nama: DataTypes.STRING,
      nomor: DataTypes.INTEGER,
    },
    {}
  );
  serial_numbers.associate = function (models) {
    // associations can be defined here
  };
  return serial_numbers;
};
