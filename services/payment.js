const { payments } = require("../models");

module.exports = {
  create: async (params) => {
    try {
      const saved = await payments.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  show: async () => {
    try {
      const result = await payments.findAll();
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },

  showByIdOrder: async (idOrder) => {
    try {
      const result = payments.findOne({
        where: { idOrder },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};
