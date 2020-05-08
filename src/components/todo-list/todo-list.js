import React from "react";
import TodoListItem from "../todo-list-item/";
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) =>{ // вместе props.todos можно написать { todos }

    const elements = todos.map(item => {
        const { id, label, important, done } = item; // каждый объект со свойствами распаковываем по переменнным
        return (<li key={id} className="list-group-item list-group-item-action">
                    <TodoListItem label={label} important={important} done = {done}
                                  onDeleted={ ()=> onDeleted(id) }
                                  onToggleImportant={ ()=> onToggleImportant(id) }
                                  onToggleDone={ ()=> onToggleDone(id) } />
                </li>)
    });

    return(
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;