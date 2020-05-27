import React, { Component } from 'react';
import './FamousItemList.css';
/* import img1 from './icons/profile.jpg'; */

import {Link} from 'react-router-dom';

var numeral = require('numeral');

function test (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? Math.abs(Number(labelValue)) / 1.0e+9 + " B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? Math.abs(Number(labelValue)) / 1.0e+6 + " M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? Math.abs(Number(labelValue)) / 1.0e+3 + " K"

    : Math.abs(Number(labelValue));

}


const ListItem = (props) => {
    let viewCount = numeral(props.views).format('0.0a');
   /*  let subsCount = numeral(props.subs).format('0.0a'); */

    let subSub= test(props.subs)
    let viewView = /* test(props.views) */ viewCount;

    return (
        <React.Fragment>
            <div className="main-list">
                <div className="rank">
                    <p>{props.index+1}</p>
                </div>
                <div className="image-div">
                    <img src={props.thumbURL} alt=""/>
                </div>
                <div>
                    <p className="headingmain"> {props.title} </p>
                </div>
                <div className="flex-column">
                    <p className="heading1"> {subSub} </p>
                    <p className="heading2"> Total Subscibers </p>
                </div>

                <div className="flex-column">
                    <p className="heading1"> {viewView} </p>
                    <p className="heading2"> Total Views </p>
                </div>
                <div>
                    <a href={`https://www.youtube.com/channel/${props.id}`}> Checkout their Channel </a>
                </div>
            </div>  
        </React.Fragment>   
      );
}
 
export default ListItem;