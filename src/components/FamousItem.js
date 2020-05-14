import React, {Component} from 'react';
import youtube from '../api/youtube';



class FamousItem extends Component {

    state = {
        count : 0,
        thumbnailUrl : null,
    }
    async componentDidMount()
    {
        const {data : {items : [a] }} = await youtube.get('channels',
        {params : {
            part: "statistics,snippet",
            id: this.props.id,
            key: 'AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8',
        }
    });

    const data = await youtube.get('channels',
        {params : {
            part: "statistics,snippet",
            id: this.props.id,
            key: 'AIzaSyBXWUFsREQ45OYZ8ebNXrunfGhlYrNXdR8',
        }
    });
  
        console.log(data)
        this.setState({count : a.statistics.subscriberCount, thumbnailUrl : a.snippet.thumbnails.medium.url})
    }

/*     Handleclick = async() =>
    {
        
    } */

    render() { 
        return ( 
        <div style = {{border : "red solid 1px"}}>
            <h1 onClick={this.Handleclick}>{this.props.title}</h1>
            <h2>{this.props.id}</h2>
            <h3>Total Subscriber - {this.state.count}</h3>
            <img src={this.state.thumbnailUrl} alt="tumbnail"/>
        </div>
         );
    }
}
 
export default FamousItem;

