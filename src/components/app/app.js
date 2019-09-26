import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends React.Component {

    uuid = 0;

    state = {
        todos: [
            this.createItem('Drink Coffee'),
            this.createItem('Make Awesome React App'),
            this.createItem('Go To Cinema'),
        ]
    }

    createItem(label) {
        return {
            id: this.uuid++,
            label,
            done: false,
            important: false
        };
    }

    findItemIdx(id, todos) {
        return todos.findIndex(el => el.id === id);
    }

    findItem(id, todos) {
        return todos[this.findItemIdx(id, todos)];
    }

    findItemWithIdx(id, todos) {
        const idx = this.findItemIdx(id, todos);
        const item = todos[idx];
        return {
            idx,
            item
        };
    }

    onDeleteItem = (id) => {
        this.setState(({ todos }) => {
            const filtered = todos.filter((todo) => todo.id !== id);
            return {
                todos: filtered
            };
        });
    }

    onAddItem = (label) => {
        this.setState(({ todos }) => {
            return {
                todos: [
                    ...todos,
                    this.createItem(label)
                ]
            };
        });
    }

    toggleProperty(arr, id, propName) {
        const { idx, item } = this.findItemWithIdx(id, arr);
        const newItem = {
            ...item,
            [propName]: !item[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todos }) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ todos }) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            };
        });
    }

    render () {
        const { todos } = this.state;
        const doneCount = todos.filter(el => el.done).length;
        const todoCount = todos.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader todo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ItemAddForm onAddItem={ this.onAddItem }/>
                <TodoList todos={ todos } 
                          onDeleteItem={ this.onDeleteItem }
                          onToggleDone={ this.onToggleDone }
                          onToggleImportant={ this.onToggleImportant }/>
            </div>
        );
    }
};
