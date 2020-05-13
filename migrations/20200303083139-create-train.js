"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trains", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING(100),
      },
      tipe: {
        type: Sequelize.ENUM("Excutive (H)", "Ekonomi (Q)"),
      },
      berangkat: {
        type: Sequelize.DATE,
      },
      dariStasiun: {
        type: Sequelize.STRING(100),
      },
      dariKota: {
        type: Sequelize.STRING(50),
      },
      WaktuBerangkat: {
        type: Sequelize.TIME,
      },
      tibaDiStasiun: {
        type: Sequelize.STRING(100),
      },
      tibaDiKota: {
        type: Sequelize.STRING(50),
      },
      waktuTiba: {
        type: Sequelize.TIME,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      sisa: {
        type: Sequelize.INTEGER,
      },
      stok: {
        type: Sequelize.INTEGER,
      },
      kursiBayi: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("trains");
  },
};
