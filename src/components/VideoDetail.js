import React from 'react';

import {Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

  /*   console.log(video.id.videoId); */

    var videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    
    if(video.id.videoId == undefined)
      videoSrc = `https://www.youtube.com/embed/${video.id}`
 
    
  
    return (  
        <React.Fragment>      
        <Paper elevation ={6} style= {{width: '100%', height : '40%'}}>
        <iframe 
        allowFullScreen= {true} 
        frameBorder = "0" 
        height = "100%" 
        width= "100%" 
        title ="Video Player" 
        src={videoSrc}/>
        </Paper>

        <Paper 
        elevation= {6} 
        style={{padding : '15px'}}>

        <Typography variant="h6">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channeltitle} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>

        </Paper>
    
      
        
        </React.Fragment>
        
    );
}

 
export default VideoDetail;