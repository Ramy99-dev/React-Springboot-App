import {  useNavigate } from "react-router-dom";
export const  useLogout = ()=>{
    const navigate = useNavigate()  
    return function logout()
    {
       
        localStorage.removeItem("token");
        navigate('/login');
    }
    
}