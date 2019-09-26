import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearch(term);
    }

    render() {
        return <input className="search-input form-control"
                      placeholder="What to search"
                      value={ this.state.term }
                      onChange={ this.onSearch } />;
    }
}
