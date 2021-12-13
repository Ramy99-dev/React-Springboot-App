
import axios from "axios";
import './login.css';
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()  
    let username="";
    let password="";
    return ( 
        <div className="login-container">
            <form>
                <div className="connection-form">
                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e)=>{
                        username = e.target.value;
                        console.log(username)
                    }} type="text"/><br/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>{
                        password = e.target.value;
                        
                    }} type="password"/><br/>
                </div>
                <div className="button">
                <button onClick={(e)=>{
                    e.preventDefault();
                    let user={username,password}
                    axios.post("http://localhost:8082/animal-management/login",user).then((result)=>{
                       localStorage.setItem("token",result.headers.authorization)
                       navigate('/home')
                    })
                 
                }}>Login</button>
                </div> 
                </div>
            </form> 

        </div>
     );
}
 
export default Login;