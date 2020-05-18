import React, {Component} from 'react';
import { fetchData } from './../api/fetchAPI';
import './FamousItem.css';

var numeral = require('numeral');


class FamousItem extends Component {

    state = {
        views : 0,
        thumbnailUrl : null,
        subs : 0,
    }
    async componentDidMount()
    {
       const {data : {items : [a]}} = await fetchData(this.props.id)

       var viewCount = numeral(a.statistics.viewCount).format('0,0');
       var subsCount = numeral(a.statistics.subscriberCount).format('0,0')

       this.setState ( { 
        views : viewCount, 
        thumbnailUrl : a.snippet.thumbnails.medium.url,
        subs : subsCount })
    };

    render() { 
        return ( 
            
        <div className="container" style = {{/* border : "red solid 1px" */}}>
           <img className= "image"  src={this.state.thumbnailUrl} alt="thumbnail"/>
            <h1 style={{fontSize : "25px", color : "#000000",fontFamily : 'Montserrat'}}>{this.props.title}</h1>
            <div class="button_cont" align="center">
                <a style={{fontFamily : 'Montserrat',fontWeight : 'bold'}} class="example_a" href={`www.youtube.com/${this.props.id}`} target="_blank" rel="nofollow noopener">Checkout the Channel</a>
                </div>
            <h3 class="text-1" style={{color : "#000000", fontWeight : 'bold', fontFamily : 'Montserrat'}}>Total Views  - </h3>
            <h4 class="text-2" style={{color : "#1c9eff", fontWeight : 'bold', fontFamily : 'Montserrat'}}> {this.state.views}</h4><br></br>
            <h3 class="text-1" style={{color : "#000000", fontWeight : 'bold', fontFamily : 'Montserrat'}}>Total Subcribers  - </h3>
            <h4 class="text-2" style={{color : "#1c9eff", fontWeight : 'bold', fontFamily : 'Montserrat'}}> {this.state.subs}</h4>
        </div>
         );
    }
}
 
export default FamousItem;

