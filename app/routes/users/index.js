const express = require('express');

const router = express.Router()


//controllers 
const userControllers = require('./../../controllers/userControllers');

//validator
const inputValidator = require('../../validators')
const schema = require('../../validators/schemas')

//auth
const auth = require('./../../middlewares/auth');


//captcha
const verifyCaptcha = require('./../../utils/captcha/verifyCaptcha')

router.get('/login', userControllers.getLogin)
router.post('/login',
    verifyCaptcha,
    userControllers.postLogin,
    userControllers.rememberMe
)
router.get('/logout', auth, userControllers.logout)

router.get('/register', userControllers.getRegister)
router.post('/register', inputValidator(schema.usercreate, 'body'), userControllers.postRegister)


module.exports = router