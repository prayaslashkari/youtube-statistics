import React from 'react';
import {Link} from 'react-router-dom';
import './LeaderNav.css';

const LeaderNav = () => {
    return ( 
        <React.Fragment>
        <div className="leader-nav">
          <Link  className= "link-tag" style={{textDecoration: 'none'}} to="/leaderboard/list">List Style </Link>
          <Link style={{textDecoration: 'none'}} to="/leaderboard/card">Card Style </Link>
        </div>
      </React.Fragment>
     );
}
 
export default LeaderNav;