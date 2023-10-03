const express = require('express');

const router = express.Router()


//controllers 
const homeControllers = require('./../../controllers/homeControllers');

router.get('/',homeControllers.getHome)



module.exports = router