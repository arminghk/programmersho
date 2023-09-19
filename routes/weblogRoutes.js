const express = require('express');

const router = express.Router()

const homeRoutes = require('./home');
const usersRoutes = require('./users');
const dashRoutes = require('./dashboard');


router.use('/',homeRoutes)


router.use('/users',usersRoutes)



router.use('/dashboard',dashRoutes)




module.exports = router