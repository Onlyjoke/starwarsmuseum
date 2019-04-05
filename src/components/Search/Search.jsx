import React from 'react';
import PropTypes from 'prop-types';

import css from './Search.styl';

const Search = (props) => {
    const {
        handleChange,
        searchInput
    } = props;

    return (
        <div className={css.root}>
            <input
                type='text'
                className={css.input}
                placeholder='Enter character'
                value={searchInput}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

Search.propTypes = {
    handleChange: PropTypes.func,
    searchInput: PropTypes.string
};

export default Search;
