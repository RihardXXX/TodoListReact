import React from "react";

import AppHeader from "../app-header/";
import InfoHeader from "../info-header/";
import SearchPanel from "../search-panel/";
import ItemStatusFilter from "../item-status-filter/";
import TodoList from "../todo-list/";

import './app.css';

const App = () => {

    const todoData = [
        { label: 'drink coffee', important: false, id: 1},
        { label: 'make awesome app', important: true, id: 2},
        { label: 'have a lunch', important: false, id: 3},
    ];

    return (
        <div>
            <AppHeader />
            <InfoHeader />
            <div className="panel">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } onDeleted={(id)=> console.log('del', id)} />
        </div>
    );
};

export default App;