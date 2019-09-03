import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>ToDo List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search" />;
};

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Goto Kipr</li>
        </ul>
    );
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};
    
ReactDOM.render(<App />, document.getElementById('root'));
