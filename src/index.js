import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const todos = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome React App', important: true, id: 2},
        {label: 'Go To Cinema', important: false, id: 3},
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todos}/>
        </div>
    );
};
    
ReactDOM.render(<App />, document.getElementById('root'));
