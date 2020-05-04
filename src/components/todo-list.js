import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) =>{ // вместе props.todos можно написать { todos }

    const elements = todos.map(item => {
        const { id, label, important } = item; // каждый объект со свойствами распаковываем по переменнным
        return (<li key={id}>
                    <TodoListItem label={label} important={important}/>
                </li>)
    });

    return(
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;