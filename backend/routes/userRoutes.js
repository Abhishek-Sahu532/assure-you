const express = require('express');
const router = express.Router();
const {registerUser, loginUser,forgetPassword, logOut, resetPassword} = require('../controllers/userController')


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forget').post(forgetPassword);
router.route('/logout').get(logOut);
router.route('/password/reset/:token').put(resetPassword)


module.exports = router