import React, { Component } from "react";
import './todo-list-item.css'


export default class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.important = props.important;
        this.onDeleted = props.onDeleted;

        this.state = {
            done: false,
            important: false,
        };

        this.onLabelClick = () => {
            this.setState((state) => {
                return {
                    done: !state.done,
                }
            })
        };

        this.onMarkImportant = () => {
            this.setState((state) => {
                return {
                    important: !state.important,
                };
            });
        };
    }


    render() {
        const label = this.label;
        const onDeleted = this.onDeleted;
        const { done, important } = this.state;
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
                      onClick={ this.onLabelClick } >
                    { label }</span>

                  <button type="button"
                          onClick={ this.onMarkImportant }
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
    }
}