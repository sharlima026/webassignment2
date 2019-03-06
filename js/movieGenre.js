//QUESTION 1
constructor: Movie()
{
    this.uuid = "";
    this.title = "";
    this.year = "";
    this.genres = null;
    this.related = [];
}

constructor: Genre()
{
    this.name = "";
    this.movies = [];
}

//QUESTION 2
function addRelatedMovie(movie)
{
    for (let x = 0; x < Movie.length(); x++)
    {
        if (Movie.title[x].localeCompare(movie) === 0)
        {
            related.push(movie);
            return true;
        }
    }
    return false;
}
module.export.addRelatedMovie = addRelatedMovie;

//QUESTION 3
function setGenre(genre)
{
    for (let x = 0; x < Genre.length(); x++)
    {
        if (Genre.name[x].localeCompare(genre) === 0)
        {
            genres = Genre[x].name;
        }
    }
    addRelatedMovie(movie);
    return false;
}
module.export.setGenre = setGenre;

//QUESTION 4
function addMovie(movie)
{
    for (let x = 0; x < Movie.length(); x++)
    {
        if (Movie.title[x].localeCompare(movie) === 0)
        {
            for (let y=0; y<Genre.movies.length; y++)
            {
                if (Genre.movies[y].localeCompare(movie) > 0)
                {
                    movies.splice(y, movie);
                }
            }
            return true;
        }
    }
    return false;
}
module.export.addMovie = addMovie;