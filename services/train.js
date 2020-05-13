const { trains } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

module.exports = {
  create: async (params) => {
    try {
      const saved = await trains.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  bulkCreate: async (params) => {
    try {
      console.log(params);

      const saved = await trains.bulkCreate(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  show: async (berangkat) => {
    try {
      const tgl = new Date(berangkat);
      const result = await trains.findAll({
        where: {
          berangkat: { [Op.gte]: tgl },
        },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showById: async (id) => {
    try {
      const result = trains.findOne({
        where: { id },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showDariKota: async () => {
    try {
      const result = trains.findAll({
        attributes: [
          [sequelize.fn("DISTINCT", sequelize.col("dariKota")), "dariKota"],
        ],
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showTibaKota: async () => {
    try {
      const result = trains.findAll({
        attributes: [
          [sequelize.fn("DISTINCT", sequelize.col("tibaDiKota")), "tibaDiKota"],
        ],
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showCount: async (param) => {
    try {
      const result = await trains.findAll({
        attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "trains"]],
        where: {
          berangkat: { [Op.gte]: param },
        },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  search: async (dariKota, tibaDiKota, berangkat) => {
    try {
      const tgl = new Date(berangkat);
      const result = trains.findAll({
        where: {
          dariKota,
          tibaDiKota,
          berangkat: { [Op.gte]: tgl },
        },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};
