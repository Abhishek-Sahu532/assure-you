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


    let products = await apiFeature.query;
    const productsCount = await Product.countDocuments();
let filteredProductsCount = products.length;

apiFeature.pagination(resultPerPage);
// products = await apiFeature.query;
  // console.log(productCount)
  // const products = await Product.find();
  
  return res
    .status(200)
    .json({
      success: true,
      products,
      productsCount,
      resultPerPage,
      filteredProductsCount
    })
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

//create new review and update it

exports.createProductReview = async (req, res, next) => {
  try {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user.id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await Product.findById(productId);
    const isReceived = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    ); //checking the previous reviews, if done or not

    if (isReceived) {
      product.reviews.forEach((rev) => {
        if ((rev) => rev.user.toString() === req.user._id.toString()) {
          (rev.rating = rating), (rev.comment = comment);
        }
      });
    } else {
      product.review.push(review);
      product.numOfReviews = product.reviews.length;
    }
    // overall ratings
    let avg = 0;
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

//GET ALL REVIEWS OF A PRODUCT

exports.getProductRevviews = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

//DELETE REVIEWS
exports.deleteReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

   reviews.forEach((rev) => {
      avg += rev.rating;
    });

   ratings = avg / reviews.length;

   const numOfReviews = reviews.length;
    await product.findByIdAndUpdate(req.query.productId, {
      reviews, ratings, numOfReviews
    },{
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

// module.exports = getAllProducts
