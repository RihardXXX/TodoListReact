import React from "react";
import './todo-list-item.css'


const TodoListItem = ({ label, important, done, onDeleted, onToggleImportant, onToggleDone  }) => {

    let classNames = "todo-list-item";

    if (done){
        classNames += ' done';
    }
    if (important){
        classNames += ' important';
    }
    return (
        <span>
            <span className={classNames}
                  onClick={ onToggleDone } >
                { label }</span>

              <button type="button"
                      onClick={ onToggleImportant }
                      className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      onClick={ onDeleted }
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
        </span>
    );

};

export default TodoListItem;