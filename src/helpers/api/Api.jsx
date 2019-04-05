import axios from 'axios';

export default {
    getAllCharacters: () => axios.get('https://swapi.co/api/people')
        .then((response) => response),
    characterSearch: (id) => axios.get(`https://swapi.co/api/people/?search=${id}`)
        .then((response) => response),
    getSelectedCharacter: (id) => axios.get(`https://swapi.co/api/people/${id}/`)
        .then((response) => response),
    loadMoreCharacters: (nextUrl) => axios.get(`${nextUrl}`)
        .then((response) => response)
};
