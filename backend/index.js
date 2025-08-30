require("dotenv").config();
const express =  require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "*",

}))

// Database Connection
connectDB();

app.get("/",()=>{
    console.log("All well working")
})

const PORT =  process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is ruuning on 5000 port");
})