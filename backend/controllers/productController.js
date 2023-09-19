const Product = require("../models/productModel");
const ApiFeature = require("../utils/feature");

//create Product - Only Admin has access to create the product

exports.createProduct = async (req, res, next) => {
// req.body.user = req.user.id
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//GET PRODUCT DETAILS

exports.getProductDetails = async (req, res, next) => {

  try {

    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};  

//GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  const resultPerPage = 8;
  const apiFeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const productCount = await Product.countDocuments()
    // console.log(productCount)
  // const products = await Product.find();
  const products = await apiFeature.query;
  return res
    .status(200)
    .json({
      success: true,
      products,
      productCount
    })
    .send();
};

//UPDATE PRODUCT - ONLY ADMIN HAS RIGHTS TO UPDATE ANY PRODUCT

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  // console.log(req.params.id , product);
  res.status(200).json({
    success: true,
    product,
  });
};

//DELETE PRODUCT- ADMIN

exports.deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    // console.log(product)
    // await product.findByIdAndDelete(req.params.id)
    await product.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Product deleted",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

// module.exports = getAllProducts
