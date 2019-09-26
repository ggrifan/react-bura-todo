import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todos: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome React App', important: true, id: 2},
            {label: 'Go To Cinema', important: false, id: 3},
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todos }) => {
            const filtered = todos.filter((todo) => todo.id !== id);
            return {
                todos: filtered
            };
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            id: this.maxId++
        };

        this.setState(({ todos }) => {
            return {
                todos: [
                    ...todos,
                    newItem
                ]
            };
        });
    }

    render () {
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ItemAddForm onAdded={ this.addItem }/>
                <TodoList todos={this.state.todos} onDeleted={ this.deleteItem }/>
            </div>
        );
    }
};
