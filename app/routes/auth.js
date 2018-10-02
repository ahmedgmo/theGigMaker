const controller = require('../controllers/auth')
const validate = require('../controllers/auth.validate')
const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')
const passport = require('passport')

/*
 ROUTES
*/

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
  })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

router.post(
  '/register',
  trimRequest.all,
  validate.register,
  controller.register
)
router.post('/verify', trimRequest.all, validate.verify, controller.verify)
router.post(
  '/forgot',
  trimRequest.all,
  validate.forgotPassword,
  controller.forgotPassword
)
router.post(
  '/reset',
  trimRequest.all,
  validate.resetPassword,
  controller.resetPassword
)
router.post('/login', trimRequest.all, validate.login, controller.login)

module.exports = router
