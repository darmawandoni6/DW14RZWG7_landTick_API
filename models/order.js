"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      noOrder: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
      idKereta: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      harga: DataTypes.INTEGER,
      status: DataTypes.ENUM("Pending", "Success", "Cancel"),
    },
    {}
  );
  orders.associate = function (models) {
    // associations can be defined here
    orders.belongsTo(models.trains, {
      foreignKey: "idKereta",
      as: "train",
    });
    orders.belongsTo(models.users, {
      foreignKey: "idUser",
      as: "user",
    });
    orders.hasMany(models.payment, {
      foreignKey: "idOrder",
      as: "payment",
    });
  };
  return orders;
};
