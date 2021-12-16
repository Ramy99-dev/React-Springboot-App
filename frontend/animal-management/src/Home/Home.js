import './home.css';
import Nav from './Nav';
import jwt_decode from "jwt-decode";
import { useState , useEffect} from 'react';
import { Link , useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()  
    let [user,setUser]=useState(null)
    useEffect(() => {
        let token = localStorage.getItem("token");
        console.log(token)
        if(token !=null)
        {
           setUser(jwt_decode(token+"").sub);
        }
        else{
            navigate('/login');
        } 
    }, [])

    
    const logout = ()=>{
        localStorage.removeItem("token");
        navigate('/login');
    }
    return ( 
        <div className="home-container">
           <div className='header'>
                {user ? <div><span>{user}</span><i onClick={logout} class="fas fa-sign-out-alt"></i></div> :<div><Link to="/login"><span>Login</span></Link></div> }
                
           </div>
           <div className='content'>
               <div className='logo'>
                   <img className='logo-img' src="logo.png" alt="" />
               </div>
               <div className="menu">
                 <Nav type="animal"/>
                 <Nav type="breed"/>
               </div>
           </div>
        </div>
     );
}
 
export default Home;