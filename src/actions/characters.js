import { Api } from '../helpers/api';

export const getAllCharacters = () => (dispatch) => {
    Api.getAllCharacters().then((data) => {
        dispatch({
            type: 'FETCH_GET_ALL_CHARACTERS_SUCCESS',
            payload: {
                data: data.data,
                paginateNext: data.data.next
            }
        });
    });
};

export const characterSearch = (id) => (dispatch) => {
    Api.characterSearch(id).then((data) => {
        dispatch({
            type: 'FETCH_CHARACTER_SEARCH_SUCCESS',
            payload: data.data
        });
    });
};

export const getSelectedCharacter = (id) => (dispatch) => {
    Api.getSelectedCharacter(id).then((data) => {
        dispatch({
            type: 'FETCH_GET_SELECTED_CHARACTER_SUCCESS',
            payload: data.data
        });
    });
};

export const loadMoreCharacters = (nextUrl) => (dispatch) => {
    Api.loadMoreCharacters(nextUrl).then((data) => {
        dispatch({
            type: 'FETCH_GET_MORE_CHARACTER_SUCCESS',
            payload: {
                data: data.data,
                paginateNext: data.data.next
            }
        });
    });
};
