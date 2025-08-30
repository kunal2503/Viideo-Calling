const mongoose = require("mongoose");

const URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/videoCallApp";

const connectDB = async()=>{
    try{    
        await mongoose.connect(URL)
        console.log("Database connected successfully");
    } catch(error){
        console.log("Error while connecting to database", error);
    }
} 

module.exports =  connectDB;