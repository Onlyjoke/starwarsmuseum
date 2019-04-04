export default function characters(state = {}, action) {
    if (action.type === 'FETCH_GET_ALL_CHARACTERS_SUCCESS') {
        const data = action.payload;
        let id = 0;

        data.results.forEach((item) => {
            item.id = id++;
        });

        return {
            ...state,
            data: data.results
        };
    }

    return state;
}
