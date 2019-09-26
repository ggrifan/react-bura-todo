import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const { filter, onFilter } = this.props;
        
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = name === filter;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            
            return (
                <button type="button"
                        key={ name }
                        className={ `btn ${clazz}` }
                        onClick={ () => { onFilter(name) } }>
                    { label }
                </button>
            );
        });

        return (
            <div className="btn-group item-status-filter">
                { buttons }
            </div>
        );
    }
}
