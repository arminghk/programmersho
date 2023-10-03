const express = require('express');

const router = express.Router()

const homeRoutes = require('./home');
const adminRoutes = require('./admin');



router.use('/',homeRoutes)


router.use('/admin',adminRoutes)







module.exports = router