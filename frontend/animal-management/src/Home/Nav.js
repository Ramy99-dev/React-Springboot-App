import { Link } from "react-router-dom";
import './nav.css';
import jwt_decode from "jwt-decode";
import { useState , useEffect} from 'react';
const Nav = ({type}) => {
   let [isAdmin,setIsAdmin]=useState(false)
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token)
        {
          let user= jwt_decode(token+"")  
         if(user.roles.includes("ADMIN"))
          {
               setIsAdmin(true);
          }      
         
        } 
    }, [])
    return ( 
      <div className="menu-item">
        {type=="animal"? 
        <ul>
         <Link className="link" to="/animals"> <li>Aniamls List</li></Link>
          { isAdmin  &&<Link className="link" to="/add-animal"> <li>Add Animal</li></Link>}
        </ul>:<ul>
        <Link className="link" to="/race"><li>Breed List</li></Link>
          { isAdmin && <Link className="link" to="/add-race"><li>Add Breed</li></Link>}
          </ul>}
      </div>
     );
}
 
export default Nav;