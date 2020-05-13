const jwt = require("jsonwebtoken");
const User = require("../models").user;

exports.registrasi = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;
    const addUser = {
      name,
      status: 0,
      username,
      email,
      password,
      gender,
      phone,
      address
    };
    const data = await User.create(addUser);
    if (data) {
      const token = jwt.sign({ userId: data.id }, "my-secret-key");
      res.send({
        msg: "success",
        token: token
      });
    }
  } catch (error) {
    res.status(400).send({
      msg: "Error"
    });
    console.log(error.message);
  }
};

exports.cekUser = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.user.userId },
      attributes: ["id", "status", "name"]
    });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    // res.status(401).send({
    //   data: "error"
    // });
  }
};
