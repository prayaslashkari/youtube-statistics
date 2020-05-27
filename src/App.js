import React from 'react';
import {Grid} from '@material-ui/core';
import {Route} from 'react-router-dom';
import {SearchBar, VideoDetail, VideoList, Famouslist, Navbar} from './components';
import youtube from './api/youtube';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handlePopular = async () =>
    {
        const response = await youtube.get('videos',{
            params : {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                key: 'AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8',
                maxResults : 10,
                regionCode : "IN" 
            }    
        });
        let arr = response.data.items; 
        this.setState ({videos :arr, selectedVideo : response.data.items[0]});
    }

    handleSubmit = async(searchTerm) =>
     {
        const response = await youtube.get('search', {
            params : {
                part: 'snippet',
                maxResults: 8,
                key: 'AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8',
                q : searchTerm,
            }
        });

        /* console.log(response) */

        let arr = response.data.items; 
      /*   this.shuffle(arr); */

        this.setState ({videos :arr, selectedVideo : response.data.items[0]});
    }

    onSelectVideo = (video) =>
    {
        this.setState({selectedVideo : video});
    }

    render(){
    const {selectedVideo, videos} = this.state;
    return ( 

        <React.Fragment>
        <Navbar onSubmit={this.handleSubmit} onPopular= {this.handlePopular}/>

        <Route path="/leaderboard">
            <Grid container justify = "center" align = "center">
                <Grid item xs={12}>
                    <Famouslist/>
                </Grid>
            </Grid>
        </Route>

        <Route path="/">
        
        </Route>

        <Route path="/search">
            <Grid container justify = "center" align = "center" >
                <Grid item xs ={12}>
                    <Grid container spacing={2} style={{width:"100%"}}>
                        <Grid item xs = {12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} onPopular = {this.handlePopular} />
                        </Grid>
                        
                        <Grid item xs = {9}>
                            <VideoDetail video = {selectedVideo}/>
                        </Grid>
                        
                        <Grid item xs = {3}>
                            <VideoList videos = {videos} onSelectVideo= {this.onSelectVideo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>    
        </Route>
        
        </React.Fragment>
    );
    }
}

 
export default App;