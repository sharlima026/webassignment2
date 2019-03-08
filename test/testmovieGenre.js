// module = require("./movieGenre")
// let movie = Movie();
// movie = Movie()
// darkWorld = new Movie()
// thor = new Movie()
// action = new Genre()
// action.name = "Action"
// darkWorld.title = "Dark World"
// thor.title = "Thor"
// thor.genres = action.name
// darkWorld.genres = action.name
// darkWorld.addRelatedMovie(thor);
// thor.addRelatedMovie(darkWorld);

// console.log(thor.related[0].title)
// console.log(thor.genres)

//const Movie = require('./movieGenre').Movie;
//const Genre = require('./movieGenre').Genre;
//const assert = require('assert');

//module = require('./movieGenre.js')


let movie = require("../js/movieGenre");
let Movie = movie.Movie;
let genre = require("../js/movieGenre");
let Genre = genre.Genre;


aquaman = new Movie();
aquaman.uuid = '001';
aquaman.title = 'Aquaman';
aquaman.year = 2018;

bumblebee = new Movie();
bumblebee.uuid = '002';
bumblebee. title = 'Bumblebee';
bumblebee.year = 2018;


console.log('addRelatedMovie Test Cases');
function test_addRelated(a, b){
   
   if (a.addRelatedMovie(b) === true){
   
       console.log('TEST PASSED');
   } else {
       console.log('TEST FAILED');
   }
}
test_addRelated(aquaman, bumblebee); 
