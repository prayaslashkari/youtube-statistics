import React from 'react';
import {Grid} from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList, Famouslist} from './components';
import youtube from './api/youtube';

const para = {
    params : {
        part: "snippet,contentDetails,statistics",
        id: "UC_vcKmg67vjMP7ciLnSxSHQ",
        key: 'AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8',
    }  
}

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleFamous = async () => {
        const {data : {items}} = await youtube.get('channels', para);

        console.log (items);
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
        
        console.log(response);
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
        
        <Grid container justify = "center" align = "center">
            <Grid item xs={12}>
            <Famouslist onFamous = {this.handleFamous}/>
            </Grid>
        </Grid>

        <Grid container justify = "center" align = "center" >

            <Grid item xs ={12}>
                <Grid container spacing={2} style={{width:"100%"}}>
                    <Grid
                    item xs = {12}
                    >
                    <SearchBar onFormSubmit = {this.handleSubmit} onPopular = {this.handlePopular} />
                    </Grid>
                    
                    <Grid 
                    item xs = {9}>
                    <VideoDetail video = {selectedVideo}/>
                    </Grid>
                    
                    <Grid item xs = {3}>
                    <VideoList videos = {videos} onSelectVideo= {this.onSelectVideo}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        </React.Fragment>
    );
    }
}

 
export default App;