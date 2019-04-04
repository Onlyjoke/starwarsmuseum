import React from 'react';
import PropTypes from 'prop-types';

import SelectedCharacter from '../SelectedCharacter/SelectedCharacter';
import Search from '../Search/Search';
import Characters from '../Characters/Characters';
import Preloader from '../../helpers/Preloader/Preloader';
import css from './App.styl';

const App = (props) => {
    const {
        filteredCharacters,
        isSelectedCharacter,
        selectedCharacter,
        searchInput,
        handleChange,
        handleNameClick,
        handleBackClick
    } = props;

    return (
        <div className={css.root}>
            {
                isSelectedCharacter
                    ? (
                        <div>
                            <SelectedCharacter
                                selectedCharacter={selectedCharacter}
                                handleBackClick={handleBackClick}
                            />
                        </div>
                    )
                    : (
                        <div>
                            <Search
                                searchInput={searchInput}
                                handleChange={handleChange}
                            />
                            <Characters
                                filteredCharacters={filteredCharacters}
                                handleChange={handleChange}
                                handleNameClick={handleNameClick}
                            />
                        </div>
                    )
            }
        </div>
    );
};

App.propTypes = {
    filteredCharacters: PropTypes.array.isRequired,
    isSelectedCharacter: PropTypes.bool,
    selectedCharacter: PropTypes.object,
    searchInput: PropTypes.string,
    handleChange: PropTypes.func,
    handleNameClick: PropTypes.func,
    handleBackClick: PropTypes.func
};

export default Preloader('characters')(App);
