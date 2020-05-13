"use strict";
module.exports = (sequelize, DataTypes) => {
  const payments = sequelize.define(
    "payments",
    {
      idOrder: DataTypes.INTEGER,
      totalHarga: DataTypes.INTEGER,
      attachment: DataTypes.INTEGER,
    },
    {}
  );
  payments.associate = function (models) {
    // associations can be defined here
    payments.belongsTo(models.image, {
      foreignKey: "attachment",
      as: "image",
    });
  };
  return payments;
};
