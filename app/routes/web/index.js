const express = require('express');

const router = express.Router()

const homeRoutes = require('./home');
const adminRoutes = require('./admin');
const userRoutes=require('./../../routes/users');



router.use('/',homeRoutes)

router.use('/users',userRoutes)


router.use('/admin',adminRoutes)







module.exports = router