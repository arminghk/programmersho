const express = require('express');

const router = express.Router()

//validator
const inputValidator = require('../../validators')
const schema = require('../../validators/schemas')

router.get('/login', (req, res) => {
    res.render('login.ejs', { pageTitle: 'login page', path: '/login' })
})
router.post('/login', (req, res) => {
    res.send('login')
})

router.get('/register', (req, res) => {
    res.render('register.ejs', { pageTitle: 'register page', path: '/register' })
})
router.post('/register', inputValidator(schema.usercreate, 'body'), (req, res) => {
    res.send('register')
})


module.exports = router