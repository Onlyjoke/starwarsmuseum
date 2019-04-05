import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter';
import { getSelectedCharacter } from '../../actions/characters';

class SelectedCharacterContainer extends React.Component {
    static propTypes = {
        selectedCharacter: PropTypes.object,
        match: PropTypes.object.isRequired,
        getSelectedCharacter: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSelectedCharacter(id);
    }

    render() {
        const { selectedCharacter } = this.props;

        return (
            <SelectedCharacter
                selectedCharacter={selectedCharacter}
            />
        );
    }
}

const mapStateToProps = ({ characters }) => {
    return {
        selectedCharacter: characters.selectedCharacter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedCharacter: (id) => {
            dispatch(getSelectedCharacter(id));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectedCharacterContainer));
