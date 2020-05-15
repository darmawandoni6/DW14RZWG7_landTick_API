const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const paymentService = require("../services/payment");
const imageService = require("../services/image");

module.exports = {
  imgPayment: async (req, res) => {
    try {
      const params = req.body;
      const image = {
        idImage: req.file.filename,
        ImageName: params.ImageName,
      };
      const saved = await imageService.create(image);
      if (!saved) res.status(200).json(responseError(500));

      const payment = {
        idOrder: params.idOrder,
        totalHarga: params.totalHarga,
        attachment: saved.id,
      };
      const savedPayment = await paymentService.create(payment);
      if (!savedPayment) res.status(200).json(responseError(500));
      console.log(payment);

      return res.status(200).json(response(savedPayment));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  create: async (req, res) => {
    try {
      const params = req.body;
      const image = {
        idImage: req.file.filename,
        ImageName: params.ImageName,
      };
      const saved = await imageService.create(image);
      if (!saved) res.status(200).json(responseError(500));
      return res.status(200).json(response(saved));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
