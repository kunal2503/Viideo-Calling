const mongoose = require("mongoose");
const bcrypt =  require("bcrypt");
const jwt =  require("jsonwebtoken");
const Users = require("../models/user");

exports.signup = async(req,res)=>{
    const {username, email, password} =  req.body;
    try{
        if(!username || !email || !password){
            return res.status(400).json({message : "All fields are required"});
        }

        const userAlreadyExists = await Users.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({message :  "User already exists"});
        }
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new Users({
            username,
            email,
            password : hashedPassword,
        });
        await newUser.save();

        const token = jwt.sign({userId : newUser._id},"hi",{expiresIn : "1d"});

        res.status(200).json({message : "Signup successfull"},token, newUser);
    } catch(error){
        console.log("Error in signup", error);
        res.status(500).json({message : "Internal server error"});
    }
}
exports.signin = async(req,res)=>{

}


