const express = require('express');
const userControllers = require('../../controllers/userControllers');


const router = express.Router()


router.get('/register',userControllers.getRegister)


module.exports = router