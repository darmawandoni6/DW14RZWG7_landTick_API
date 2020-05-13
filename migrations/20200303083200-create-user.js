"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ktp: {
        type: Sequelize.STRING(16),
      },
      nama: {
        type: Sequelize.STRING(50),
      },
      status: {
        type: Sequelize.ENUM("admin", "user"),
      },
      username: {
        type: Sequelize.STRING(20),
      },
      email: {
        type: Sequelize.STRING(50),
      },
      password: {
        type: Sequelize.STRING,
      },
      jenisKelamin: {
        type: Sequelize.ENUM("Laki-Laki", "Prempuan"),
      },
      phone: {
        type: Sequelize.STRING(13),
      },
      alamat: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable("users");
  },
};
