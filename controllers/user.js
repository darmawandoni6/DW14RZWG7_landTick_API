const response = require("../helpers/response");
const responseError = require("../helpers/response-error");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const { key } = require("../helpers/jwtKey");

const userService = require("../services/user");

module.exports = {
  show: async (req, res) => {
    try {
      const result = await userService.show();
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  showById: async (req, res) => {
    try {
      const result = await userService.showById(req.params.id);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  register: async (req, res) => {
    try {
      const params = req.body;

      const cekKTP = await userService.showByKTP(params.ktp);
      if (cekKTP) return res.status(200).json(responseError(409));
      const cekUsername = await userService.showByUsername(params.username);
      if (cekUsername) return res.status(200).json(responseError(409));
      const cekEmail = await userService.showByEmail(params.email);
      if (cekEmail) return res.status(200).json(responseError(409));

      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(params.password, salt);

      params.password = hash;
      const token = jwt.sign({ userId: params.username }, key);

      const saved = await userService.register(params);

      return res.status(200).json({
        data: response(saved),
        token,
      });
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await userService.showByUsername(username);
      if (!user) {
        return res.status(200).json(responseError(201));
      }
      const passHash = user.dataValues.password;

      const cekPassword = await bcrypt.compareSync(password, passHash);
      if (!cekPassword) {
        return res.status(200).json(responseError(401));
      }

      const token = jwt.sign({ userName: username, userId: user.id }, key);

      const result = {
        token,
        role: user.status,
      };
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },

  showByToken: async (req, res) => {
    try {
      console.log(req.user.userId);

      const result = await userService.showById(req.user.userId);
      return res.status(200).json(response(result));
    } catch (error) {
      if (error.name)
        return res.status(200).json(responseError(400, error.name));
      return res.status(200).json(responseError(400, error.toString()));
    }
  },
};
