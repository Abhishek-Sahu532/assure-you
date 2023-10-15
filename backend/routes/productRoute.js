const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview, getProductRevviews, deleteReview
} = require("../controllers/productController");
const router = express.Router();
const { isAuthenticate, authorizeRoles } = require("../middlewares/auth");


router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticate, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticate, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticate, deleteProduct)

// router.route('/product/:id').delete(deleteProduct)
// router.route('/product/:id').get(getProductDetails)

router.route("/product/:id").get(getProductDetails);
router.route('/review').put(isAuthenticate, createProductReview);

router.route('/reviews').get(getProductRevviews).delete(isAuthenticate, deleteReview)

module.exports = router;
