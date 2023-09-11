const express = require('express');
const morgan = require('morgan');

const path = require('path');


const indexRoutes = require('./routes');
require('dotenv').config({path:'./config/config.env'})

//database
const connectDB = require('./config/db');
connectDB() 

const app =  express()


//log
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//views 
app.set('view engine','ejs')
app.set('views','views')

//static folder
app.use(express.static(path.join(__dirname,'public')))




//routes
app.use('/',indexRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`);
})
