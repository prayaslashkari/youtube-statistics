import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {
    const ListOfVideos = videos.map((video,id) => <VideoItem key= {id} video = {video} onSelectVideo={onSelectVideo}/>)


    return (
        <Grid container spacing={3}>
        {ListOfVideos}
        </Grid>
    ) 
}

 
export default VideoList;