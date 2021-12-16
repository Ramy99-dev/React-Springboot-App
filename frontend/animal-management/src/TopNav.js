import './topnav.css';
import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import {useLogout} from './hooks/useLogout';
import { useState, useEffect } from "react";
const TopNav = () => {
    const user = useAuth()
    let logout = useLogout();
    return ( 
        <div className="top-nav">
           <ul className="top-nav-items">
           <Link className="link" to="/home"><li>Home</li></Link>
           <Link className="link" to="/animals"><li>Animals</li></Link>
           <Link className="link" to="/race"><li>Breeds</li></Link>
           
           </ul>
           <div className="user">
                {user ? <div><span>{user}</span><i onClick={logout} class="fas fa-sign-out-alt"></i></div> :<div><Link to="/login"><span>Login</span></Link></div> }   
           </div>
        </div>
     );
}
 
export default TopNav;