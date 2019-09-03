import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>ToDo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input placeholder={searchText}
                  style={searchStyle}
                  className="foo"
                  disabled />;
};

const TodoList = () => {
    const list = ['Drink Coffee', 'Drink Whisky'];

    return (
        <ul>
            <li>{ list[0] }</li>
            <li>{ list[1] }</li>
        </ul>
    );
}

const App = () => {
    let isLoggedIn = true;
    const loginBox = <h3>Login Please</h3>;
    const welcomeBox = <h3>Welcome Back</h3>;

    const value = <script>alert("Boom!!!")</script>;

    return (
        <div>
            { value }
            { isLoggedIn ? welcomeBox : loginBox }
            <h3>{ (new Date()).toString() }</h3>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};
    
ReactDOM.render(<App />, document.getElementById('root'));
