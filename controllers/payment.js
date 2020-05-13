const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const paymentService = require("../services/payment");

module.exports = {
  show: async (req, res) => {
    try {
      const result = await paymentService.show();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showByIdOrder: async (req, res) => {
    try {
      const result = await paymentService.showByIdOrder(req.params.id);
      if (!result) res.status(200).json(responseError(404));
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  create: async (req, res) => {
    try {
      const params = req.body;
      const saved = await paymentService.create(params);
      return res.status(200).json(response(saved));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
