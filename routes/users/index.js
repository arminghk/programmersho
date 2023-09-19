const express = require('express');

const router = express.Router()


//controllers 
const userControllers = require('./../../controllers/userControllers');

//validator
const inputValidator = require('../../validators')
const schema = require('../../validators/schemas')

router.get('/login', userControllers.getLogin)
router.post('/login', userControllers.postLogin)

router.get('/register',userControllers.getRegister )
router.post('/register', inputValidator(schema.usercreate, 'body'), userControllers.postRegister)


module.exports = router