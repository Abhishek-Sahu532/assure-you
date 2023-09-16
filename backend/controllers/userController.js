const eroor = require("../middlewares/eroor");
const User = require("../models/userModel");
const sendToken = require("../utils/sendToken");
//REGISTER A USER

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "publicid",
        url: "url1",
      },
    });

    if (!name || !email || !password) {
      return res.status(404).json({
        message: "Please provide the required information",
      });
    }
  //  return sendToken(user, 201, res);

    const token = user.getJWTToken();

    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    return res.status(201).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });


    // return res.status(200).json({
    //     message: true,
    //     user
    //   })

  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

//LOGIN USER

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //checking if user has given passwor and email
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email & password",
      });
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid email and password",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);
   return sendToken(user, 200, res);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};
