const Order = require("../models").order;
const Payment = require("../models").payment;
const User = require("../models").user;
const Kereta = require("../models").kereta;
const Typekereta = require("../models").typekereta;

exports.order = async (req, res) => {
  try {
    const { no_invoice, id_tiket, qty, totalPrice } = req.body;

    const payment = {
      qty,
      totalPrice,
      status: "Pending",
      attachment: "bca.jpg"
    };
    const data = await Payment.create(payment);

    const order = {
      no_invoice,
      id_tiket,
      id_user: req.user.userId,
      id_payment: data.id
    };
    const data2 = await Order.create(order);
    res.send({
      msg: "Success"
    });
  } catch (error) {
    res.status(401).send({
      msg: "Error"
    });
  }
};

exports.listOrder = async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [
        {
          model: User
        },
        {
          model: Payment
        },
        {
          model: Kereta
        }
      ]
    });
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      msg: "Error"
    });
  }
};

exports.listOrderDetail = async (req, res) => {
  try {
    const data = await Order.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User
        },
        {
          model: Payment
        },
        {
          model: Kereta,
          include: [
            {
              model: Typekereta
            }
          ]
        }
      ]
    });
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      msg: "Error"
    });
  }
};
