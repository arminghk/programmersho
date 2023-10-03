const express = require('express');

const router = express.Router()

//controllers
const adminController = require('./../../controllers/adminControllers');





router.get('/',adminController.getDashboard)










module.exports = router