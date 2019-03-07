//QUESTION 1
class Movie{
    constructor(){
        this.uuid = "";
        this.title = "";
        this.year = "";
        this.genres = null;
        this.related = [];
    }
}

class Genre{
    constructor(){
        this.name = "";
        this.movies = [];
    }
}



function populate()
{
    let x = 0;
    while (x >= 0){
        uuid += "001 ";
        title += "Why Did I Get Married? ";
        year += "2000 ";
        name += "Comedy ";
        movies.push(title);

        uuid += "002 ";
        title += "Why Did I Get Married 2? ";
        year += "2002 ";
        name += "Comedy ";
        movies.push(title);
        
        uuid += "003 ";
        title += "Deadpool ";
        year += "2014 ";
        name += "Action ";
        movies.push(title);
        
        uuid += "004 ";
        title += "Titanic ";
        year += "2000";
        name += "Romance";
        movies.push(title);

        uuid += "005 ";
        title += "Drag Me To Hell ";
        year += "2001 ";
        name += "Horror ";
        movies.push(title);
    }
}
//QUESTION 2
function addRelatedMovie(movie){

    if (movie instanceof Movie){
        related.push(movie);
        return true;
    }
    return false;
}
console.log(addRelatedMovie("Grey's Anatomy"));

//QUESTION 3
// function setGenre(genre)
// {
//     for (let x = 0; x < Genre.length(); x++)
//     {

//         if (Genre.name[x].localeCompare(genre) === 0)
//         {
//             genres = Genre[x].name;
//         }
//     }
//     addRelatedMovie(movie);
//     return false;
// }
// setGenre("Romance");

// //QUESTION 4
// function addMovie(movie)
// {
//     for (let x = 0; x < Movie.length(); x++)
//     {
//         if (Movie.title[x].localeCompare(movie) === 0)
//         {
//             for (let y=0; y<Genre.movies.length; y++)
//             {
//                 if (Genre.movies[y].localeCompare(movie) > 0)
//                 {
//                     movies.splice(y, movie);
//                 }
//             }
//             return true;
//         }
//     }
//     return false;
// }
// addMovie("Deadpool");
