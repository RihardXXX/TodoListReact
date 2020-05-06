import React from "react";
import TodoListItem from "../todo-list-item/";
import './todo-list.css'

const TodoList = ({ todos, onDeleted }) =>{ // вместе props.todos можно написать { todos }

    const elements = todos.map(item => {
        const { id, label, important } = item; // каждый объект со свойствами распаковываем по переменнным
        return (<li key={id} className="list-group-item list-group-item-action">
                    <TodoListItem label={label} important={important} onDeleted={ ()=> onDeleted(id) }/>
                </li>)
    });

    return(
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;