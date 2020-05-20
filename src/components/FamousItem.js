import React from 'react';

import './FamousItem.css';

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

const FamousItem = (props) => {
    let viewCount = numeral(props.views).format('0,0');
    let subsCount = numeral(props.subs).format('0,0');

    let subSub= test(props.subs)
    let viewView = test(props.views)

    return ( 
        <div className="container" style = {{/* border : "red solid 1px" */}}>
           <img className= "image"  src={props.thumbURL} alt="thumbnail"/>
            <h1 style={{fontSize : "25px", color : "#000000",fontFamily : 'Montserrat'}}>{props.title}</h1>
            <div class="button_cont" align="center">
                <a style={{fontFamily : 'Montserrat',fontWeight : 'bold'}} class="example_a" href={`www.youtube.com/${props.id}`} target="_blank" rel="nofollow noopener">Checkout the Channel</a>
                </div>
            <h3 class="text-1" style={{color : "#000000", fontWeight : 'bold', fontFamily : 'Montserrat'}}>Total Views -</h3>
            <h4 class="text-2" style={{color : "#1c9eff", fontWeight : 'bold', fontFamily : 'Montserrat'}}> {viewView}</h4><br></br>
            <h3 class="text-1" style={{color : "#000000", fontWeight : 'bold', fontFamily : 'Montserrat'}}>Total Subcribers -</h3>
            <h4 class="text-2" style={{color : "#1c9eff", fontWeight : 'bold', fontFamily : 'Montserrat'}}> {subSub}</h4>
        </div>
     );
}
 
export default FamousItem;


