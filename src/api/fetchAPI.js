import axios from 'axios';

const key = "AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8"
/* const id = "UC_vcKmg67vjMP7ciLnSxSHQ" */

// Sample URL 
// https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=UC_vcKmg67vjMP7ciLnSxSHQ&key=AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8

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