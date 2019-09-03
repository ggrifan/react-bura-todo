import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>ToDo List</h1>
        <input placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Goto Kipr</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));
