const { image } = require("../models");

module.exports = {
  create: async (params) => {
    try {
      const saved = await image.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
};
