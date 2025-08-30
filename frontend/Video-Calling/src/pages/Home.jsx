import React from "react";

const Home = () =>{
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white ">
            <h1 className="font-bold text-3xl">Welcome to Video Calling App</h1>
            {
            console.log("TOKEN",localStorage.getItem("token"),"\n","USER",localStorage.getItem("user"))}
        </div>
    );
}

export default Home;