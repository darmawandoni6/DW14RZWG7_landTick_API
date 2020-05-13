const { serial_numbers } = require("../models");
const { orders } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

module.exports = {
  create: async (params) => {
    try {
      const saved = await serial_numbers.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  show: async () => {
    try {
      const result = await serial_numbers.findAll();
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showById: async (id) => {
    try {
      const result = await serial_numbers.findOne({ where: { id } });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showByKode: async (nama) => {
    try {
      const result = await serial_numbers.findOne({ where: { nama } });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  update: async (data, nama) => {
    try {
      const result = await serial_numbers.update(
        { ...data },
        { where: { nama } }
      );
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};
