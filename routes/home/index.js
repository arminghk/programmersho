const express = require('express');

const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index.ejs',{pageTitle:'Programmersho',path:'/'})
})




module.exports = router