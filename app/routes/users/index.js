const express = require('express');

const router = express.Router()


//controllers 
const userControllers = require('./../../controllers/userControllers');

//validator
const inputValidator = require('../../../validators')
const schema = require('../../../validators/schemas')

//auth
const auth = require('./../../middlewares/auth');
const redirectIfAuthenticated = require('./../../middlewares/redirectIfAuthenticated')


//captcha
const verifyCaptcha = require('./../../../utils/captcha/verifyCaptcha')

router.get('/login',redirectIfAuthenticated,userControllers.getLogin)
router.post('/login',
    verifyCaptcha,
    redirectIfAuthenticated,
    userControllers.postLogin,
    userControllers.rememberMe
)
router.get('/logout', auth, userControllers.logout)

router.get('/register', redirectIfAuthenticated,userControllers.getRegister)
router.post('/register',redirectIfAuthenticated, inputValidator(schema.usercreate, 'body'), verifyCaptcha, userControllers.postRegister)


module.exports = router