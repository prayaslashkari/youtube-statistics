import React, {Component} from 'react';
import { fetchData } from './../api/fetchAPI';


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
        <div style = {{border : "red solid 1px"}}>
           <img src={this.state.thumbnailUrl} alt="thumbnail"/>
            <h1>{this.props.title}</h1>
            <h5>Channel Id -{this.props.id}</h5>
            <h3>Total Views - {this.state.views}</h3>
            <h3>Total Subcribers - {this.state.subs}</h3>
        </div>
         );
    }
}
 
export default FamousItem;

