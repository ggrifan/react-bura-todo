import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit }>
                <input type="text"
                       placeholder="What to do"
                       className="form-control"
                       value={ this.state.label }
                       onChange={ this.onLabelChange }/>
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        );
    }
}
