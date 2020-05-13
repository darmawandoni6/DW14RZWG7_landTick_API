"use strict";
module.exports = (sequelize, DataTypes) => {
  const trains = sequelize.define(
    "trains",
    {
      nama: DataTypes.STRING,
      tipe: DataTypes.ENUM("Excutive (H)", "Ekonomi (Q)"),
      berangkat: DataTypes.DATE,
      dariStasiun: DataTypes.STRING,
      dariKota: DataTypes.STRING,
      WaktuBerangkat: DataTypes.TIME,
      tibaDiStasiun: DataTypes.STRING,
      tibaDiKota: DataTypes.STRING,
      waktuTiba: DataTypes.TIME,
      harga: DataTypes.INTEGER,
      sisa: DataTypes.INTEGER,
      stok: DataTypes.INTEGER,
      kursiBayi: DataTypes.BOOLEAN,
    },
    {}
  );
  trains.associate = function (models) {
    // associations can be defined here
  };
  return trains;
};
