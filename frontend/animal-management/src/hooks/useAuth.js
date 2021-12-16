import jwt_decode from "jwt-decode";
import { Link , useNavigate } from "react-router-dom";
export function useAuth()
{
    const navigate = useNavigate()  
    let token = localStorage.getItem("token");
        console.log(token)
        if(token !=null)
        {
           return jwt_decode(token+"").sub;
        }
        else{
            navigate('/login');
        } 
}