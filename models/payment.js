"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      idOrder: DataTypes.INTEGER,
      totalHarga: DataTypes.INTEGER,
      attachment: DataTypes.INTEGER,
    },
    {}
  );
  payment.associate = function (models) {
    // associations can be defined here
    payments.belongsTo(models.image, {
      foreignKey: "attachment",
      as: "image",
    });
  };
  return payment;
};
