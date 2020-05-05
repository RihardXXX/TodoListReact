import React from "react";
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'please enter text for search';
    return (
        <input className="form-control" placeholder={ searchText }/>
    );
};

export default SearchPanel;