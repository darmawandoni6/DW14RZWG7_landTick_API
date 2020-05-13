"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      noOrder: {
        type: Sequelize.STRING(10),
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      idKereta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "trains",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM("Pending", "Success", "Cancel"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  },
};
