import React from 'react';

import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleteItem, onToggleDone, onToggleImportant }) => {
    const elements = todos.map(todo => {
        const {id, ...itemProps} = todo;
        
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    { ...itemProps }
                    onDeleteItem={ () => onDeleteItem(id) }
                    onToggleDone={ () => onToggleDone(id) }
                    onToggleImportant={ () => onToggleImportant(id) }/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;
