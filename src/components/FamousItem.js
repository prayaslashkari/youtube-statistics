import React, {Component} from 'react';
import { fetchData } from './../api/fetchAPI';



class FamousItem extends Component {

    state = {
        count : 0,
        thumbnailUrl : null,
    }
    async componentDidMount()
    {
        const response = fetchData(this.props.id)
        console.log(response)
    };

    render() { 
        return ( 
        <div style = {{border : "red solid 1px"}}>
            <h1 onClick={this.Handleclick}>{this.props.title}</h1>
            <h2>{this.props.id}</h2>
            <h3>Total Subscriber - {this.state.count}</h3>
            <img src={this.state.thumbnailUrl} alt="thumbnail"/>
        </div>
         );
    }
}
 
export default FamousItem;

