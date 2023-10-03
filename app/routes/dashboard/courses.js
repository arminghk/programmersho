const express = require('express');
const courseControllers = require('../../controllers/courseControllers');

const router = express.Router()





router.get('/',courseControllers.getCourses)

router.get('/new-course',courseControllers.courseForm)


module.exports = router