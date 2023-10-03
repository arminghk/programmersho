const express = require('express');

const router = express.Router()

const coursesRoutes = require('./courses');

//controllers
const dashboardControllers = require('./../../controllers/dashboardControllers');


const auth = require('./../../middlewares/auth');


router.get('/',auth,dashboardControllers.getDashboard)

router.use('/courses',coursesRoutes)


module.exports = router