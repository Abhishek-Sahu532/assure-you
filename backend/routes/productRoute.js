const express = require('express');
const  {getAllProducts, createProduct}  = require('../controllers/productController');
const router = express.Router();


// router.get('/products', getAllProducts);
router.route('/products').get(getAllProducts)
router.route('/product/new').post(createProduct)

// console.log('router working')



module.exports = router