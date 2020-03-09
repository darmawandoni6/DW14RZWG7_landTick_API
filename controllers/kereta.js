const Kereta = require("../models").kereta;
const Type = require("../models").typekereta;

exports.addTiket = async (req, res) => {
  try {
    const data = await Kereta.create(req.body);
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      msg: "error"
    });
  }
};

exports.tickets = async (req, res) => {
  try {
    const dateStart = req.query.param1;
    console.log(req.query.param1);

    const data = await Kereta.findOne({
      where: { dateStart },
      atributes: [
        {
          model: Type
        }
      ]
    });
    console.log(dateStart);
    if (data) res.send({ data });
    // else res.send({ dateStart: q });
  } catch (error) {
    res.status(401).send({
      msg: error.message
    });
  }
};

exports.ticketAll = async (req, res) => {
  try {
    // const q = req.query;
    // console.log(q.param1);

    const data = await Kereta.findAll({
      include: [
        {
          model: Type
        }
      ]
    });
    res.send({ data });
  } catch (error) {
    res.status(401).send({
      msg: "error"
    });
  }
};

exports.buytiket = async (req, res) => {
  try {
    const data = await Kereta.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Type
        }
      ]
    });
    res.send({ data });
  } catch (error) {
    res.status(401).send({
      msg: "error"
    });
  }
};
