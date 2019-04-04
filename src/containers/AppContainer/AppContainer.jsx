import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllCharacters } from '../../actions/characters';
import App from '../../components/App/App';


class AppContainer extends React.Component {
    static propTypes = {
        characters: PropTypes.array,
        getAllCharacters: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            filteredCharacters: [],
            isSelectedCharacter: false,
            selectedCharacter: {},
            searchInput: ''
        };
    }

    componentDidMount() {
        this.props.getAllCharacters();
    }

    componentWillReceiveProps(nextProps) {
        const { characters } = this.props;

        if (nextProps.characters !== characters) {
            this.setState({
                filteredCharacters: nextProps.characters
            });
        }
    }

    handleChange = (e) => {
        const { characters } = this.props;
        const { value } = e.target;
        const updatedCharacters = characters.filter((item) => {
            return item.name.toLowerCase().search(
                value.toLowerCase()
            ) !== -1;
        });

        this.setState({
            filteredCharacters: updatedCharacters,
            searchInput: value
        });
    };

    handleNameClick = (id) => {
        const { characters } = this.props;
        const selectedCharacterIndex = characters.findIndex((arr) => arr.id === id);

        this.setState({
            isSelectedCharacter: true,
            selectedCharacter: characters[selectedCharacterIndex]
        });
    };

    handleBackClick = () => {
        this.setState({
            isSelectedCharacter: false
        });
    };

    render() {
        const { characters } = this.props;

        const {
            filteredCharacters,
            isSelectedCharacter,
            selectedCharacter,
            searchInput
        } = this.state;

        return (
            <App
                characters={characters}
                filteredCharacters={filteredCharacters}
                isSelectedCharacter={isSelectedCharacter}
                selectedCharacter={selectedCharacter}
                searchInput={searchInput}
                handleChange={this.handleChange}
                handleNameClick={this.handleNameClick}
                handleBackClick={this.handleBackClick}
            />
        );
    }
}

const mapStateToProps = ({ characters }) => {
    return {
        characters: characters.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCharacters: () => {
            dispatch(getAllCharacters());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
