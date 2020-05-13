const { orders } = require("../models");
const { trains } = require("../models");
const { image } = require("../models");
const { users } = require("../models");
const { payments } = require("../models");

module.exports = {
  create: async (params) => {
    try {
      const saved = await orders.create(params);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  show: async () => {
    try {
      const result = await orders.findAll({
        include: [
          {
            model: payments,
            as: "payment",
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
              {
                model: image,
                as: "image",
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            ],
          },
          {
            model: users,
            as: "user",
          },
          {
            model: trains,
            as: "train",
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showByOrder: async (idUser) => {
    try {
      const result = await orders.findAll({
        where: {
          idUser,
          status: "Pending",
        },
        include: [
          {
            model: trains,
            as: "train",
          },
          {
            model: payments,
            as: "payment",
          },
        ],
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showById: async (idUser) => {
    try {
      const result = orders.findAll({
        where: { idUser },
        include: [
          {
            model: trains,
            as: "train",
          },
          {
            model: payments,
            as: "payment",
          },
        ],
        order: [["createdAt", "DESC"]],
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  update: async (id, params) => {
    try {
      const update = orders.update(params, {
        where: {
          id,
        },
      });
      return update;
    } catch (err) {
      console.log(err.message);
    }
  },
};
