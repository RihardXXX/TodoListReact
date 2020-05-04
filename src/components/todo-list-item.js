import React from "react";

const TodoListItem = ({ label, important }) => { /* props = { label: '........' } */

    const color = {
        color: important ? 'tomato' : 'black',
    };

    return <span style={color}>{ label }</span>;
};

export default TodoListItem;