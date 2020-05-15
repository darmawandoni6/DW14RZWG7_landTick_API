const { image } = require("../models");

module.exports = {
  create: async (params) => {
    try {
      console.log(params);

      const saved = await image.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
};
