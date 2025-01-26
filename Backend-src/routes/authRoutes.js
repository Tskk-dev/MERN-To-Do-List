const express = require ('express')
const router = express.router()
const authController = require('../controllers/authController.js')
const loginLimiter = require('../middleware/loginLimiter.js')

router.route('/')
    .post(loginLimiter, authController.login)

router.route('/refresh')
    .get(authController.refresh)

router.route('/logout')
    .post(authController.logout)

module.exports = router 