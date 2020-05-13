const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const snService = require("../services/sn");

module.exports = {
  show: async (req, res) => {
    try {
      const result = await snService.show();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showById: async (req, res) => {
    try {
      const result = await snService.showById(req.params.id);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showByKode: async (req, res) => {
    try {
      const find = await snService.showByKode(req.params.name);
      if (!find) return res.status(200).json(responseError(404));

      const data = { nomor: find.nomor + 1 };
      const update = await snService.update(data, find.nama);
      if (!update)
        return res.status(200).json(responseError(400, "ParallelSaveError"));

      const result = await snService.showByKode(find.nama);
      if (!result) return res.status(200).json(responseError(404));

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
      const saved = await snService.create(params);
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

      const find = await snService.showByKode(req.params.kode);
      if (!find) return res.status(200).json(responseError(404));

      const result = await snService.update(params, find.nama);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
