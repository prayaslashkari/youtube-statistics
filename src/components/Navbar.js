import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

const Navbar = (props) => {
    return ( 
      <div>
        <ul className="menu">
          <li onClick= {props.onPopular}>
            <Link style={{textDecoration: 'none', color : "white"}} to="/search" >Trending Videos </Link>
          </li>

          <li>
            <Link style={{textDecoration: 'none',color : "white"}} to="/leaderboard">Youtubers Leaderboard </Link>
          </li>
          <li>
          <Link style={{textDecoration: 'none', color : "white"}} to="/search">Search <FaSearch fontSize='20px'/> </Link>
          </li>
        </ul>
      </div>
    
     );
}
 
export default Navbar;
