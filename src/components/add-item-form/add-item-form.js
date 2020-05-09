import React, { Component } from "react";
import "./add-item-form.css"

export default class AddItemForm extends Component{
    state = {
        label: '',
    };

    onLabelChange = (e) => {
        this.setState({
                label: e.target.value,
            }
        )
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: '',
        })
    };

    render() {
        return (
            <form className="add-item-form" onSubmit={ this.onSubmit }>
                <input type="text"  className="form-control" placeholder="add item" onChange={ this.onLabelChange }
                    value={ this.state.label }/>
                <button className="btn btn-outline-secondary">add item</button>
            </form>
        );
    };
};