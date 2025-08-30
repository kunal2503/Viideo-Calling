import React,{useState} from "react";
import {MdVisibility, MdVisibilityOff} from "react-icons/md"

const Password =  ({ value, id, name,onChange}) =>{
        const [showPassword,setShowPassword] = useState(false);
        const handlePasswordShow = () =>{
            setShowPassword(prev => !prev);

        }
    return(
        <div className={`flex justify-between items-center px-4 py-2 w-full  border-1 border-gray-700  rounded-md ${focus ? "border-1" : "border-2"} `}>
            <input type={showPassword ? "text" : "password"} onChange={onChange} name={name} id={id} value={value} placeholder="Enter a Password"className="focus:outline-none" />
            {   showPassword ? <MdVisibility className="cursor-pointer text-gray-400 " onClick={handlePasswordShow}/>
                            : <MdVisibilityOff className="cursor-pointer text-gray-400" onClick={handlePasswordShow}/>
            }
        </div>
    );
}

export default Password;