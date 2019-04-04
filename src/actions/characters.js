import { Api } from '../helpers/api';

export const getAllCharacters = () => (dispatch) => {
    Api.getAllCharacters().then((data) => {
        dispatch({
            type: 'FETCH_GET_ALL_CHARACTERS_SUCCESS',
            payload: data.data
        });
    });
};
