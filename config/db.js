const mongoose = require('mongoose');


 const connectDB = async()=>{   
    try {
 
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected on : ${conn.connection.host}`);
       
    } catch (error) {
        console.log('error on database connection');
    }
 }


 module.exports = connectDB
