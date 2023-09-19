const express = require('express');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const handle404Error = require('./errors/handle404Error')
const handleUnexpectedServerErrors = require('./errors/handleUnexpectedServerErrors')

const path = require('path');


const weblogRoutes = require('./routes/weblogRoutes');
require('dotenv').config({path:'./config/config.env'})

//database
const connectDB = require('./config/db');
connectDB() 

const app =  express()

//body parser
app.use(express.urlencoded({ extended: false }));

//log
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//views 

app.set('view engine','ejs')
app.set('views','views')

///layout
app.use(expressLayout)
app.set('layout','./layouts/mainLayout')

//static folder
app.use(express.static(path.join(__dirname,'public')))




//routes
app.use('/',weblogRoutes)
app.use((req,res)=>{
    res.render('404',{pageTitle:'404',path:'/404'})
})

app.use(handle404Error)
// app.use(handleUnexpectedServerErrors)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`);
})
