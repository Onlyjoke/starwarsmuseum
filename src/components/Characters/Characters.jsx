import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import css from './Characters.styl';

const Characters = (props) => {
    const {
        filteredCharacters,
        handleNameClick
    } = props;

    if (filteredCharacters.length === 0) {
        return (
            <div className={css.root}>
                Name not found.
            </div>
        );
    }

    return (
        <div className={css.root}>
            {
                filteredCharacters.map((item) => {
                    return (
                        <div
                            key={shortid.generate()}
                            className={css.name}
                            onClick={() => handleNameClick(item.id)}
                        >
                            {item.name}
                        </div>
                    );
                })
            }
        </div>
    );
};

Characters.propTypes = {
    filteredCharacters: PropTypes.array.isRequired,
    handleNameClick: PropTypes.func
};

export default Characters;
