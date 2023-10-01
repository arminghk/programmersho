const express = require('express');

const router = express.Router()

//controllers
const dashboardControllers = require('./../../controllers/dashboardControllers');


const auth = require('./../../middlewares/auth');


router.get('/',auth,dashboardControllers.getDashboard)




module.exports = router