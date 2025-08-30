import React, { useState } from "react";
import Password  from "../../components/PasswordBtn";
import { Link,useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

const Signup = () =>{
    const [fromData, setFromData] = useState({
        username : "",
        email : "",
        password : ""
    })
    const navigate = useNavigate();
    const handleSignup = async(e) =>{
        try{
            e.preventDefault();
            const response =  await axiosInstance.post("/auth/signup",fromData);
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            navigate("/")
        } catch(error){
            console.log(error.response.data.message);
        }
    }
    const handleChange = (e) =>{
        setFromData({...fromData,[e.target.name]: e.target.value})
    }
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white ">
            <div className="md:w-1/3 px-4 py-5 bg-gray-900 rounded-lg shadow-md flex flex-col gap-2 items-center">
                <h2 className="font-bold text-2xl">Signup</h2>
                <form className="w-full flex flex-col gap-4 px-4 py-2" noValidate>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="font-light">Username</label> 
                    <input type="text" onChange={handleChange} name="username" id="username" value={fromData.username} placeholder="Enter a Username" className="px-4 py-2 w-full focus:outline-none border-1 border-gray-700 focus:border-2 rounded-md "/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-light">Email</label> 
                    <input type="email" onChange={handleChange} name="email" id="email" value={fromData.email} placeholder="Enter a Email" className="px-4 py-2 w-full focus:outline-none border-1 border-gray-700 focus:border-2 rounded-md "/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-light">Password</label> 
                    <Password value={fromData.password} onChange={handleChange} id={"password"} name={"password"}/>
                    </div>
                    <button className="px-4 py-2 hover:bg-blue-700 font-bold rounded-md bg-blue-600" onClick={handleSignup}>Signup</button>
                </form>
                <div className="flex gap-2">
                <p>Already have an account?</p> <Link to="/signin" className="text-blue-400 underline">Signin</Link> 
                </div>
            </div>
        </div>
    );
}

export default  Signup;