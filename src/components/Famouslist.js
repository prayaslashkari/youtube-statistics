import React, {Component} from 'react';
import {multiData } from './../api/fetchAPI';

import FamousItem from './FamousItem';
import ListItem from './FamousItemList';
import LeaderNav from './LeaderNav';

import {Route} from 'react-router-dom';
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
            <h1> TOP INDIAN YOUTUBERS STATS</h1>
                <LeaderNav/>

                <Route exact path="/leaderboard/list">
                    {response.map((each, index) => 
                        <ListItem
                            index= {index}
                            key={each.id} 
                            thumbURL = {each.snippet.thumbnails.medium.url} 
                            title={each.snippet.title} 
                            id={each.id}
                            views = {each.statistics.viewCount} 
                            subs = {each.statistics.subscriberCount}/>)}
                </Route>

                <Route exact path="/leaderboard/card">
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
                </Route>
                
        </div> 
        );
    }
}
 
export default Famouslist;
