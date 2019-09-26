import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    
    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            };
        });

        // Error !!! this.setState() is async function
        // this.state may be not valid
        //
        // this.setState({
        //     done: !this.state.done
        // });
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            };
        });

        // Error !!! this.setState() is async function
        // this.state may be not valid
        //
        // this.setState({
        //     important: !this.state.important
        // });
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
                <span className="todo-list-item-label"
                    onClick={ this.onLabelClick }>
                    { label }
                </span>
    
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ this.onMarkImportant }>
                    <i className="fa fa-exclamation"></i>
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        );
    }
}

// const TodoListItemFunc = ({label, important = false}) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };
//     return (
//         <span className="todo-list-item">
//             <span className="todo-list-item-label"
//                 style={ style }>
//                 { label }
//             </span>

//             <button type="button"
//                     className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation"></i>
//             </button>

//             <button type="button"
//                     className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash-o"></i>
//             </button>
//         </span>
//     );
// };

// export default TodoListItem;
