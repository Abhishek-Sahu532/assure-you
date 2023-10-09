const express = require('express');
const router = express.Router();
const { isAuthenticate, authorizeRoles } = require("../middlewares/auth");
const { newOrder, getSingleOrder, myOrders } = require('../controllers/orderController');


router.route('/order/new').post(isAuthenticate, newOrder)
router.route('/order/:id').get(isAuthenticate, authorizeRoles('admin'), getSingleOrder)
router.route('/order/me').get(isAuthenticate,  myOrders)


module.exports = router;