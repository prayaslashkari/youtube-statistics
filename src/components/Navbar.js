import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

const Navbar = (props) => {
    return ( 
      <React.Fragment>
        <div class="main-header">
        
          <Link style={{textDecoration: 'none', color : "black"}} to="/search" onClick= {props.onPopular} >Trending Videos </Link>
          <Link style={{textDecoration: 'none',color : "black"}} to="/leaderboard">Youtubers Leaderboard </Link>
          <Link style={{textDecoration: 'none', color : "black"}} to="/search">Search <FaSearch fontSize='20px'/> </Link>
        </div>
      </React.Fragment>
    
     );
}
 
export default Navbar;
