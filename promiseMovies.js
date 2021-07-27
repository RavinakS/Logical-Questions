// How does promises works in asyncronous way?

const axios = require('axios');
const fs = require('fs').promises //.promises - Node.js includes a promised-based version of the callback-based fs library

const movieUrl = 'https://ghibliapi.herokuapp.com/films'; // copied from a site "Community"

const getApi = axios.get(movieUrl); // axoi.get() method returns a promise
// console.log(getApi); // a promise - { pending }
getApi.then(
    (resolvedData)=>{
        // console.log(resolvedData.data); // "data" is the key of the the whole main object, "data", it's a array has all movie details.
        console.log('');
        console.log('*****vvv*****');
        console.log('Successfully retrieved our list of movies');
        console.log("*****^^^*****");
        console.log('');

        let movieList = []
        count = 1;
        resolvedData.data.forEach(aMovie => {
            movieList.push(`${count++}. ${aMovie['title']} (${aMovie['release_date']})`);
        })

        // console.log(movieList);
        // console.log(fs.writeFile('promiseMovies.csv', movieList));
        return fs.writeFile('promiseMovies.csv', movieList);

}).then(()=> {

    console.log("Saved the list of movies to promiseMovies.csv")

}).catch((error)=>{

    console.log('');
    console.log(`couldn't save the movie list to the file: ${error}`);
    console.log('');

})

// If any promise is not fulfilled in the chain of promises, JavaScript automatically goes to the catch() function if it was defined. 
// That’s why we only have one catch() clause even though we have two asynchronous operations.

// So this is what means that Promisses works asyncronaslly as well

// corrected code 
/*
change line number 25 with bellow line of code

return fs.writeFile('promiseMovies.csv', movieList.toString());

*/

