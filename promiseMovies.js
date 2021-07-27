const axios = require('axios');

const movieUrl = 'https://ghibliapi.herokuapp.com/films'; // copied from a site "Community"

const getApi = axios.get(movieUrl); // axoi.get() method returns a promise
console.log(getApi); // a promise - { pending }
getApi.then(
    (resolvedData)=>{
        // console.log(resolvedData.data); // "data" is the key of the the whole main object, "data", it's a array has all movie details.
        console.log('Successfully retrieved our list of movies');
        count = 1;
        resolvedData.data.forEach(aMovie => {
            console.log(`${count++}. ${aMovie['title']} (${aMovie['release_date']})`);
    })
}, 
    (rejectedData)=>{
    console.log(rejectedData);
})