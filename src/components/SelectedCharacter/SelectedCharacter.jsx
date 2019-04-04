import React from 'react';
import PropTypes from 'prop-types';

import css from './SelectedCharacter.styl';

const SelectedCharacter = (props) => {
    const {
        selectedCharacter,
        handleBackClick
    } = props;
    return (
        <div className={css.root}>
            <button
                type='button'
                className={css.back}
                onClick={() => handleBackClick()}
            >
                Back to search
            </button>
            <div className={css.fade} />
            <div className={css.starWars}>
                <div className={css.crawl}>
                    <div className={css.item}>
                        Name: {selectedCharacter.name}
                    </div>
                    <div className={css.item}>
                        Birth year: {selectedCharacter.birth_year}
                    </div>
                    <div className={css.item}>
                        Gender: {selectedCharacter.gender}
                    </div>
                    <div className={css.item}>
                        Height: {selectedCharacter.height}
                    </div>
                    <div className={css.item}>
                        Mass: {selectedCharacter.mass}
                    </div>
                    <div className={css.item}>
                        Eye color: {selectedCharacter.eye_color}
                    </div>
                    <div className={css.item}>
                        Hair color: {selectedCharacter.hair_color}
                    </div>
                    <div className={css.item}>
                        Skin color: {selectedCharacter.skin_color}
                    </div>
                </div>
            </div>
        </div>
    );
};

SelectedCharacter.propTypes = {
    selectedCharacter: PropTypes.object,
    handleBackClick: PropTypes.func
};

export default SelectedCharacter;
