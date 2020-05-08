import React, { Component } from "react";

import AppHeader from "../app-header/";
import InfoHeader from "../info-header/";
import SearchPanel from "../search-panel/";
import ItemStatusFilter from "../item-status-filter/";
import TodoList from "../todo-list/";
import AddItemForm from "../add-item-form/";

import './app.css';



export default class App extends Component{
    maxId = 100;

    constructor() {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('drink coffee'),
                this.createTodoItem('make awesome app'),
                this.createTodoItem('have a lunch'),
            ],
        };
    }

    createTodoItem(label){
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(elem => elem.id === id);
            const newData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newData,
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray,
            }
        });
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex(elem => elem.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            }
        })
    };

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el)=> el.done).length;
        const moreCount = todoData.length - doneCount;

        return (
            <div>
                <AppHeader />
                <InfoHeader more={moreCount} done={doneCount} />
                <div className="panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={ todoData }
                          onDeleted={ this.deleteItem }
                          onToggleImportant={ this.onToggleImportant }
                          onToggleDone={ this.onToggleDone }/>
                <AddItemForm todos={ todoData } addItem={ this.addItem }/>
            </div>
        );
    }

}
