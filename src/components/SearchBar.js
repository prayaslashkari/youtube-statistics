import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';

import Button from '@material-ui/core/Button';

class SearchBar extends Component {
    state = { 
        searchTerm: 'youtube',
     }

     componentDidMount(){
         this.props.onFormSubmit(this.state.searchTerm);
     }

    handleChange = (event) => this.setState({ searchTerm : event.target.value });

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    handlePopular = () => {

        const {onPopular} = this.props;

        onPopular();
    }

    render() { 
        return ( 
            <React.Fragment>
            
            {/* <Button variant="contained" color="primary" onClick = {this.handlePopular}>
            Popular
            </Button> */}

            <Paper elevation={6} style={{ padding:'25px' }}>  

            <form onSubmit= {this.handleSubmit}>
                <TextField fullWidth label="Search Videos..." onChange={this.handleChange}/>
            </form>
            
            </Paper>
            </React.Fragment>
            );
    }
}
 
export default SearchBar;