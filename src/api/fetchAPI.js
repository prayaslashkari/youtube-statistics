import axios from 'axios';

const key = process.env.REACT_APP_API_KEY
// Sample URL 
// https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=UC_vcKmg67vjMP7ciLnSxSHQ&key=[key]

const url = "https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics"

export const fetchData = async (id) =>
{

    const urlTemp = `${url}&id=${id}&key=${key}`

    try {
        const response = await axios.get(urlTemp)
        return response
        
    } catch (error) {
        console.log(error)
    }
    
}