import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <ul>
      <li>
        <Link to="/">Trending Videos </Link>
      </li>
      <li>
        <Link to="/leaderboard">Youtubers Leaderboard </Link>
      </li>
      <li>
        <Link to="/search">Search </Link>
      </li>
     
    </ul>
     );
}
 
export default Navbar;
