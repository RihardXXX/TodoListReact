import React, { Component } from "react";
import './search-panel.css'

export default class SearchPanel extends Component{

    state = {
        term: '',
    };

    onTermChange = (e) => {
        this.setState({
            term: e.target.value,
        });
        this.props.searchChange(e.target.value);
    };

    render() {
        const searchText = 'please enter text for search';
        return (
            <input className="form-control" placeholder={ searchText }
                   onChange={ this.onTermChange } value={ this.state.term }/>
        );
    }
};

