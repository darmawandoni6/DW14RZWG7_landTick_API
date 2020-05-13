const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const userService = require("../services/user");
const orderService = require("../services/order");

module.exports = {
  show: async (req, res) => {
    try {
      const result = await orderService.show();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showById: async (req, res) => {
    try {
      console.log(req.user);

      const id = req.user.userId;
      const findOrder = await orderService.showById(id);
      if (!findOrder) return res.status(200).json(responseError(404));

      const findUser = await userService.showById(id);
      if (!findUser) return res.status(200).json(responseError(404));

      return res.status(200).json(
        response({
          order: findOrder,
          user: findUser,
        })
      );
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showByOrder: async (req, res) => {
    try {
      const id = req.user.userId;
      const findOrder = await orderService.showByOrder(id);
      if (!findOrder) return res.status(200).json(responseError(404));

      return res.status(200).json(response(findOrder));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },

  create: async (req, res) => {
    try {
      const params = req.body;
      const saved = await orderService.create(params);
      return res.status(200).json(response(saved));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  update: async (req, res) => {
    try {
      const params = req.body;
      params.updatedAt = new Date();
      const id = req.params.id;
      const update = await orderService.update(id, params);
      return res.status(200).json(response(update));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
