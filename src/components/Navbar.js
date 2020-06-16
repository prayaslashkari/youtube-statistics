import React from 'react';
import {Link} from 'react-router-dom';

import { FaSearch,FaRandom,FaStar } from "react-icons/fa";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return ( 
      <React.Fragment>
        <div class={styles.container}>
  
          <div class={styles.inner}>

              <div class={styles.item}>
                <Link to="/search" onClick= {props.onPopular} >Trending Videos </Link> <FaRandom color='white' fontSize='20px'/>
              </div> 

              <div class={styles.item}>
                <Link to="/leaderboard/list">Youtubers Leaderboard </Link> <FaStar color='white' fontSize='20px'/>
              </div> 

              <div class={styles.item}>
                <Link to="/search">Search</Link> <FaSearch color='white' fontSize='20px'/>
              </div> 
    
          </div>

        </div>
      </React.Fragment>
    
     );
}
 
export default Navbar;
