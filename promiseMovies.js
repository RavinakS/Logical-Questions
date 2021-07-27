const axios = require('axios');

const movieUrl = 'https://ghibliapi.herokuapp.com/films'; // copied from a site "Community"

const getApi = axios.get(movieUrl); // axoi.get() method returns a promise
console.log(getApi); // a promise - { pending }
getApi.then(
    (resolvedData)=>{
        console.log(typeof resolvedData);
    // console.log('Successfully retrieved our list of movies');
    // resolvedData.forEach(aMovie => {
    //     console.log(`${aMovie['title']}, ${aMovie['release_date']}`);
    // })
}, 
    (rejectedData)=>{
    console.log(rejectedData);
})