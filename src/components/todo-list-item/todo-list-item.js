import React from "react";
import './todo-list-item.css'

const TodoListItem = ({ label, important }) => { /* props = { label: '........' } */

    const color = {
        color: important ? 'tomato' : 'black',
    };

    return (
        <span>
            <span style={color}>{ label }</span>
                  <button type="button"
                          className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                  </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
        </span>
    );
};

export default TodoListItem;