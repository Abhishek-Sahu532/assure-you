const Order = require("../models/orderModel");
const Product = require("../models/productModel");

//creating new orders
exports.newOrder = async (req, res, next) => {
  try {
    const {
      shippingInfo,
      orderItem,
      paymentInfo,
      itemsPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      shippingInfo,
      orderItem,
      paymentInfo,
      itemsPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      order,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

//get order -- NOT WORKING
exports.getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      //populate method will go and search in user table and provide the name and email for the particular user
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    return res.status(200).json({
      success: true,
      order,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

//myorders for logged in user -- NOT WORKING
exports.myOrders = async (req, res, next) => {
  try {
    const order = await Order.find({ user: req.user._id });// will check, not working
console.log(req.user._id)
    return res.status(200).json({
      success: true,
      order,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};



//GET ALL ORDERS -- ADMIN
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    let totalAmount =  0;
orders.forEach(order => totalAmount += order.totalPrice)


return res.status(200).json({
  success: true,
  orders,
  totalAmount
})
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};




