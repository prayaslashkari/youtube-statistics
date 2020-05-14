import React from 'react';

import {Grid, Paper,Typography} from '@material-ui/core';

const VideoItem = ({video, onSelectVideo}) => {
    return (
        <Grid item xs={12}>
            <Paper elevation= {5} style={{display : 'flex', alignItems: 'center', cursor : 'pointer'}} onClick={()=> onSelectVideo(video)}>

            <img style= {{marginRight : '20px' }} src= {video.snippet.thumbnails.medium.url} alt="Thumbnail"/>

                <Typography variant= "subtitle2"><b> {video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
      );
}
 
export default VideoItem;
