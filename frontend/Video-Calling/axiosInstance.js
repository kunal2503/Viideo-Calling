 import axios from "axios";

 const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers :{
        "Content-Type" : "application/json",
        Authorization : localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
    },
    withCredentials: true,
 })

 export default axiosInstance;
