export default function characters(state = {}, action) {
    if (action.type === 'FETCH_GET_ALL_CHARACTERS_SUCCESS') {
        const { data, paginateNext } = action.payload;

        return {
            ...state,
            data: data.results,
            paginateNext
        };
    }

    if (action.type === 'FETCH_CHARACTER_SEARCH_SUCCESS') {
        const data = action.payload;

        return {
            ...state,
            data: data.results
        };
    }

    if (action.type === 'FETCH_GET_SELECTED_CHARACTER_SUCCESS') {
        const data = action.payload;

        return {
            ...state,
            selectedCharacter: data
        };
    }

    if (action.type === 'FETCH_GET_MORE_CHARACTER_SUCCESS') {
        const { data, paginateNext } = action.payload;
        const result = state.data.concat(data.results);

        return {
            ...state,
            data: result,
            paginateNext
        };
    }

    return state;
}
