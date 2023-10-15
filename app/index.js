const express = require('express');
const app = express()
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');
const handle404Error = require('./../errors/handle404Error')
const handleUnexpectedServerErrors = require('./../errors/handleUnexpectedServerErrors')
const passport = require('passport');

const path = require('path');
var flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const debug = require('debug')('programmersho');
require('dotenv').config({ path: './config/config.env' })

module.exports = class Application {
    constructor() {

        this.setupExpress()
        this.setupMongoDB()
        this.setConfig()
        this.setRouters()
    }

    setupExpress() {

        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`);
        })

    }
    setupMongoDB() {
        const connectDB = require('./../config/db');
        connectDB()
        debug('connected to database')
    }
    setConfig() {
        require('./../utils/passport');
        app.use(express.static(path.join(__dirname, 'public')))
        app.use(express.urlencoded({ extended: false }));

        app.use(require('cookie-parser')());
        app.use(session({
            secret: 'crackalackin',
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
        }));
        app.use(flash());

        ///authentivate

        app.use(passport.initialize());
        app.use(passport.session());

        //log
        if (process.env.NODE_ENV === 'development') {
            app.use(morgan('dev'))
        }

        //views

        app.set('view engine', 'ejs')
        app.set('views', 'views')

        ///layout
        app.use(expressLayout)
        app.set('layout', './layouts/mainLayout')






    
    }
    setRouters(){
        app.use(require('./../app/routes/web'))
        // app.use((req, res) => {
        //     res.render('404', { pageTitle: '404', path: '/404' })
        // })
        // app.use(handle404Error)
        // app.use(handleUnexpectedServerErrors)
    }
}






