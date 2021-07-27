const axios = require('axios');

const movieUrl = 'https://ghibliapi.herokuapp.com/films';

const getApi = axios.get(movieUrl);
console.log(getApi);