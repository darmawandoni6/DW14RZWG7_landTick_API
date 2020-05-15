const { payment } = require("../models");

module.exports = {
  create: async (params) => {
    try {
      const saved = await payment.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  show: async () => {
    try {
      const result = await payment.findAll();
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },

  showByIdOrder: async (idOrder) => {
    try {
      const result = payment.findOne({
        where: { idOrder },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};
