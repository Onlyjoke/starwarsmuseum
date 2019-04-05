import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    getAllCharacters,
    characterSearch,
    loadMoreCharacters
} from '../../actions/characters';
import Characters from '../../components/Characters/Characters';

class CharactersContainer extends React.Component {
    static propTypes = {
        characters: PropTypes.array,
        getAllCharacters: PropTypes.func.isRequired,
        characterSearch: PropTypes.func,
        loadMoreCharacters: PropTypes.func,
        paginateNext: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        };
    }

    componentDidMount() {
        this.props.getAllCharacters();
    }

    handleChange = (e) => {
        const { value } = e.target;

        this.props.characterSearch(value);

        this.setState({
            searchInput: value
        });
    };

    loadMoreCharacters = () => {
        const { paginateNext } = this.props;

        if (paginateNext) {
            this.props.loadMoreCharacters(paginateNext);
        }
    };

    render() {
        const { characters } = this.props;
        const { searchInput } = this.state;

        return (
            <Characters
                characters={characters}
                searchInput={searchInput}
                handleChange={this.handleChange}
                loadMoreCharacters={this.loadMoreCharacters}
            />
        );
    }
}

const mapStateToProps = ({ characters }) => {
    return {
        characters: characters.data,
        paginateNext: characters.paginateNext
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCharacters: () => {
            dispatch(getAllCharacters());
        },
        characterSearch: (id) => {
            dispatch(characterSearch(id));
        },
        loadMoreCharacters: (nextUrl) => {
            dispatch(loadMoreCharacters(nextUrl));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer);
