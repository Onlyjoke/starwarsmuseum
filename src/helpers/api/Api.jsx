import axios from 'axios';

export default {
    getAllCharacters: () => axios.get('https://swapi.co/api/people')
        .then((response) => response)
};
