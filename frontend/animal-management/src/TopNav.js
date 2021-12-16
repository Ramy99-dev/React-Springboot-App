import './topnav.css';
import { Link } from "react-router-dom";
const TopNav = () => {
    return ( 
        <div className="top-nav">
           <ul className="top-nav-items">
           <Link className="link" to="/home"><li>Home</li></Link>
           <Link className="link" to="/animals"><li>Animals</li></Link>
           <Link className="link" to="/race"><li>Breeds</li></Link>
           </ul>
        </div>
     );
}
 
export default TopNav;