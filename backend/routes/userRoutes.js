const express = require('express');
const router = express.Router();
const {registerUser, loginUser,forgetPassword, logOut} = require('../controllers/userController')


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/reset').post(forgetPassword)

router.route('/logout').get(logOut);



module.exports = router