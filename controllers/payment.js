const Payment = require("../models").payment;
const order = require("../models").order;
const User = require("../models").user;
const Kereta = require("../models").kereta;
const Type = require("../models").typekereta;

exports.payment = async (req, res) => {
  try {
    const data = await order.findAll({
      where: { id_user: req.user.userId },
      include: [
        {
          model: Payment
        },
        {
          model: User
        },
        {
          model: Kereta,
          include: [
            {
              model: Type
            }
          ]
        }
      ]
    });

    res.send({
      data
    });
  } catch (error) {
    console.log(req.user.userId);

    res.status(401).send({
      message: "Error"
    });
  }
};

exports.transfer = async (req, res) => {
  try {
    const data = await order.findAll({
      where: { id_user: req.user.userId },
      include: [
        {
          model: Payment,
          where: { status: "Pending" }
        },
        {
          model: User
        },
        {
          model: Kereta,
          include: [
            {
              model: Type
            }
          ]
        }
      ]
    });

    res.send({
      data
    });
  } catch (error) {
    console.log(req.user.userId);

    res.status(401).send({
      message: "Error"
    });
  }
};

exports.updatePaymnet = async (req, res) => {
  try {
    const data = await Payment.update(req.body, {
      where: { id: req.params.id }
    });
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      message: error.message
    });
  }
};
