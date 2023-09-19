const express = require('express');

const router = express.Router()

//controllers
const dashboardControllers = require('./../../controllers/dashboardControllers');


router.get('/',dashboardControllers.getDashboard)




module.exports = router