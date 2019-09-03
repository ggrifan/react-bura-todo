import React from 'react';

import './app-header.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <h4 className="todo-progress">
                <span className="badge">{todo} more to do, {done} done</span>
            </h4>
        </div>
    );
};

export default AppHeader;
