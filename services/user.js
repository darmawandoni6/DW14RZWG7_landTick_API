const { users } = require("../models");

module.exports = {
  show: async () => {
    try {
      const result = await users.findAll();
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showById: async (id) => {
    try {
      const result = users.findOne({
        where: { id },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showByKTP: async (ktp) => {
    try {
      const result = users.findOne({
        where: { ktp },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  showByUsername: async (username) => {
    try {
      const result = users.findOne({
        where: { username },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },

  showByEmail: async (email) => {
    try {
      const result = users.findOne({
        where: { email },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  register: async (data) => {
    try {
      console.log(data);
      const saved = users.create(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  login: async (username, password) => {
    try {
      const result = users.findOne({
        where: { username, password },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
};
