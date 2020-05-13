const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const trainService = require("../services/train");

module.exports = {
  show: async (req, res) => {
    try {
      const param = req.params.tgl;
      const result = await trainService.show(param);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },

  showById: async (req, res) => {
    try {
      const result = await trainService.showById(req.params.id);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showCount: async (req, res) => {
    try {
      const param = req.params.tgl;

      const result = await trainService.showCount(param);
      console.log(result.length);

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

      const saved = await trainService.create(params);
      return res.status(200).json(response(saved));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  bulkCreate: async (req, res) => {
    try {
      const params = req.body;
      // console.log("to cpntrolers", req.body);

      const saved = await trainService.bulkCreate(params);
      return res.status(200).json(response(saved));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showDariKota: async (req, res) => {
    try {
      const result = await trainService.showDariKota();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showTibaKota: async (req, res) => {
    try {
      const result = await trainService.showTibaKota();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  search: async (req, res) => {
    try {
      const { dariKota, tibaDiKota, berangkat } = req.body;
      let result = null;
      if (dariKota === "" && tibaDiKota === "") {
        const tgl = new Date(berangkat);
        result = await trainService.show(tgl);
      } else
        result = await trainService.search(dariKota, tibaDiKota, berangkat);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
