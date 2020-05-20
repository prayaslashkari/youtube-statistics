import axios from 'axios';
import { getYoutubers } from '../data/youtuberData';

const key = process.env.REACT_APP_API_KEY
// Sample URL 
// https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=UC_vcKmg67vjMP7ciLnSxSHQ&key=[key]

const url = "https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics"

/* export const fetchData = async (id) =>
{

    const urlTemp = `${url}&id=${id}&key=${key}`

    try {
        const response = await axios.get(urlTemp)
        return response;
        
        
    } catch (error) {
        console.log(error)
    }
} */
    
export const multiData = async () =>
{
    let data = getYoutubers();
    let urlT = data.map(each => `${url}&id=${each._id}&key=${key}` ) 
    let requests = urlT.map(each => axios.get(each));

    const response = await axios.all(requests)
    const kit = response.map(each => each.data.items[0])
    kit.sort((a,b) => b.statistics.subscriberCount - a.statistics.subscriberCount );
  
    return kit;
    
         
}