const express = require('express');

const router = express.Router()


router.get('/',(req,res)=>{
   
    res.render('dashboard',{pageTitle:'dashboard',path:'/dashboard',layout:'./layouts/dashLayout'})
})




module.exports = router