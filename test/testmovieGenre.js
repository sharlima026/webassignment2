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

function populate()
{
    let x = 0;
    while (x >= 0)
    {
        this.uuid += "001 ";
        this.title += "Why Did I Get Married? ";
        this.year += "2000 ";
        this.name += "Comedy ";
        this.movies[x] = this.title;
        x++;
        this.uuid += "002 ";
        this.title += "Why Did I Get Married 2? ";
        this.year += "2002 ";
        this.name += "Comedy ";
        this.movies[x] = this.title;
        x++;
        this.uuid += "003 ";
        this.title += "Deadpool ";
        this.year += "2014 ";
        this.name += "Action ";
        this.movies[x] = this.title;
        x++;
        this.uuid += "004 ";
        this.title += "Titanic ";
        this.year += "2000";
        this.name += "Romance";
        this.movies[x] = this.title;
        x++;
        this.uuid += "005 ";
        this.title += "Drag Me To Hell ";
        this.year += "2001 ";
        this.name += "Horror ";
        this.movies[x] = this.title;
        x++;
    }
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
addRelatedMovie("Titanic");

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
setGenre("Romance");

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
addMovie("Deadpool");
