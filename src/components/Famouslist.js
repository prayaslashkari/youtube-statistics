import React, {Component} from 'react';
import {multiData } from './../api/fetchAPI';

import FamousItem from './FamousItem';
/* import { getYoutubers } from '../data/youtuberData'; */

class Famouslist extends Component {

    state = {
        response : [],
    }
    
    async componentDidMount()
    {
       const responses = await multiData();
       this.setState({response : responses})
/*        console.log(responses)  */   
    };

    render() { 
        let {response} = this.state;
        return ( 
            <div> 
                <div className="container-main">
                {response.map(each => 
                    <FamousItem 
                        key={each.id} 
                        thumbURL = {each.snippet.thumbnails.medium.url} 
                        title={each.snippet.title} 
                        id={each.id}
                        views = {each.statistics.viewCount} 
                        subs = {each.statistics.subscriberCount}/>)}
                </div>
        </div> 
        );
    }
}
 
export default Famouslist;
